import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItemPortfolio(sort: { order: ASC }) {
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

  if (!menuItems || menuItems.length === 0) {
    console.error('No menu items found:', menuItems)
    return (
      <div className='font-body text-lg'>
        Error loading menu items, please contact me if you see this error
        message
      </div>
    )
  }

  return (
    <nav
      className='w-full h-24 sticky bg-emerald-100 z-10'
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='h-full px-5 flex items-center justify-between'>
        {/* Hamburger icon for mobile menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 relative w-10 h-10'
          aria-expanded={isOpen}
          aria-controls='mobile-menu'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <div
            className={`absolute top-2 rounded-sm w-9 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'bg-gray-500 rotate-45 translate-y-2' : ''
            }`}
          ></div>
          <div
            className={`absolute top-4 rounded-sm w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`absolute top-6 rounded-sm w-7 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'w-9 bg-gray-500 -rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </button>

        {/* Desktop Menu */}
        <ul className='hidden justify-center space-x-3 md:flex flex-row w-full overflow-x-hidden items-center'>
          {menuItems &&
            menuItems.map(menuItem => (
              <li
                key={menuItem.order}
                className='my-6 transition duration-300 hover:scale-105'
              >
                <Link
                  className='font-body text-xl px-5 py-3 bg-emerald-100 text-gray-800 hover:text-gray-600 rounded-lg hover:underline hover:underline-offset-2'
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

        {/* Mobile Menu */}
        <ul
          className={`md:hidden ${
            isOpen ? 'block' : 'hidden'
          } absolute top-20 left-0 right-0 bg-emerald-100`}
        >
          {menuItems &&
            menuItems.map(menuItem => (
              <li
                key={menuItem.order}
                className='py-3 px-5 border-b border-emerald-200'
              >
                <Link
                  className='block w-full font-body text-lg text-gray-800'
                  to={
                    menuItem.linkTo.slug === 'home'
                      ? '/'
                      : `/${menuItem.linkTo.slug}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Menu
