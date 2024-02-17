import React from 'react'
import Layout from './Layout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { capitalise } from '@abw/badger-utils'
import { idSafe } from './Utils.jsx'

// Read all the pages/* files and create React Router routes for them.
const matchLayout = /\/_layout$/
const matchIgnore = /\/_(examples|snippets)\//
export const routes = buildRoutes(
  import.meta.glob('../pages/**/[a-z_]*.[jt](s|sx)', { eager: true })
)
export const links = buildLinks(routes)
console.log(`links:`, links)


function buildRoutes(pages) {
  // console.log(`pages:`, pages);

  const routes = Object
    .entries(pages)
    .map(buildRoute)

  // build a lookup table from path to route
  const paths = routes
    .filter(
      route => ! route.path.match(matchIgnore)
    )
    .reduce(
      (paths, route) => {
        paths[route.path] = route
        return paths
      },
      { }
    )

  // find all the paths that end in /_layout
  const layoutPaths = Object
    .keys(paths)
    .filter(
      path => path.match(matchLayout)
    )
    .sort(
      (a, b) => b.length - a.length
    )

  // process each layout path
  for (let layoutPath of layoutPaths) {
    const layout = paths[layoutPath]
    delete paths[layoutPath]
    const base  = layoutPath.replace(/_layout$/, '')
    const blen  = base.length
    layout.path = base
    layout.children = [ ]

    // look for an index page in the directory with layout
    const index = paths[base]
    if (index) {
      delete index.path
      index.index = true
      layout.children.push(index)
      delete paths[base]
    }

    // find all the paths under the same directory
    const children = Object
      .keys(paths)
      .filter(
        path => path.slice(0, blen) === base
      )

    // console.log(`children of ${base}: `, children)
    // add child routes to the layout route
    for (let child of children) {
      const route = paths[child]
      delete paths[child]
      child = child.slice(blen)
      // console.log(`- child of ${base}: ${route.path}  => ${child}`)
      route.path = child.length ? child : '/'
      layout.children.push(route)
    }
    // add the layout page as the new page for the base directory
    // console.log(`inserting new ${base} page as layout`)
    paths[base] = layout
  }

  return Object.values(paths)
}

function buildRoute([route, module]) {
  const stub = route
    .replace(/^[./]*pages/, '')
    .replace(/\.[jt]sx?$/, '')
  const path = stub
    .replace(/index$/, '')
    .replace(/\[(\w+)\]/, ':$1')
  const Component = module.default
  const metadata = module.metadata || { }
  metadata.source = route
  metadata.stub = stub
  // console.log(`${route} => ${path}`)
  return { path, Component, metadata }
}

function buildLinks(routes) {
  const paths = routes.reduce(
    (links, route) => {
      links[route.path] = buildLink(route)
      return links
    },
    { }
  )
  const tree = { }
  Object
    .entries(paths)
    .forEach(
      ([, node]) => {
        if (node.base.length) {
          treeLeaf(
            tree,
            node.base
          )
          //parent.children.push(node)
        }
      }
    )
  console.log(`tree:`, tree)

  return paths
}

function treeLeaf(tree, leaf, create=() => ({ })) {
  const path = leaf.split(/\//)
  let node = tree
  path.forEach(
    part => node = node[part] ||= create(leaf)
  )
  return node
}

function buildLink({ path, metadata }) {
  const parts = path.replace(/^\/+/, '').replace(/\/+$/, '').split(/\/+/)
  const page  = parts.pop()

  metadata.page = page
  metadata.path = path
  metadata.base = parts.join('/')

  if (page) {
    // const last = parts.pop()
    console.log(`parts of ${path}: `, parts)
    metadata.title ||= page.split(/-/).map(capitalise).join(' ')
    metadata.id ||= idSafe(page)
    metadata.index = Boolean(metadata.stub.match(/\/index$/))
    metadata.rank ??= metadata.index ? 1 : 99
  }
  else {
    metadata.title ||= 'Index'
    metadata.id ||= 'root'
    metadata.rank ??= 1
    metadata.index = true
  }
  metadata.menu ||= metadata.title

  return metadata
}

const Router = createBrowserRouter(
  [
    {
      path:     '/',
      element:  <Layout/>,
      children: routes
    },
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router
