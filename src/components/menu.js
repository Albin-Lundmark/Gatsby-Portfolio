import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItemPortfolio {
        nodes {
          linkTo {
            slug
            title
          }
          title
          order
        }
      }
    }
  `)
  if (!data || !data.allContentfulMenuItemPortfolio) {
    console.error('Error fetching menu data:', data)
    return <div>Error loading menu</div>
  }

  const menuItems = data.allContentfulMenuItemPortfolio.nodes
  const sortedMenuItems = menuItems.sort((a, b) => a.order - b.order)

  if (!menuItems || menuItems.length === 0) {
    console.error('No menu items found:', menuItems)
    return (
      <div>
        Error loading menu items, please contact me if you see this error
        message
      </div>
    )
  }

  return (
    <nav className='w-full h-fit-content px-5'>
      <ul className='flex flex-row w-full justify-around overflow-x-hidden items-center'>
        {sortedMenuItems &&
          sortedMenuItems.map(menuItem => (
            <li
              key={menuItem.order}
              className='my-5 mr-2 transition duration-300 hover:scale-105'
            >
              <Link
                className='hover:bg-red-300 hover:text-black px-5 py-3 bg-red-900 text-white rounded'
                to={
                  menuItem.linkTo.slug === 'home'
                    ? '/'
                    : `/${menuItem.linkTo.slug}`
                }
              >
                {menuItem.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Menu
