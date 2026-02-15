import { Children, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

function Sidebar() {

   const sidebar = [
    {
      id: 1,
      title: "Home",
      icon: <i className="ri-home-2-line"></i>,
      link: "/",
    },

    {
      id: 2,
      title: "TV Shows",
      icon: <i className="ri-tv-line"></i>,
      link: "/tvshows",
    },

    {
      id: 3,
      title: "Movies",
      icon: <i className="ri-movie-2-line"></i>,
      link: "/movies",
    },

    {
      id: 4,
      title: "Animations",
      icon: <i className="ri-bear-smile-line"></i>,
      link: "/animations",
    },

    {
      id: 5,
      title: "Novels",
      icon: <i className="ri-book-open-line"></i>,
      link: "/novels",
    },

    {
      id: 6,
      title: "Games",
      icon: <i className="ri-gamepad-line"></i>,
      link: "/games",
    },
  ];

     const [space, setSpace] = useState(220)

  return (
    <div className='flex flex-row'>
        {/* Sidebar */}
        <aside className={`w-[${space}px] h-[calc(100vh-4rem)] sticky py-10 bg-red-400`}>
            {sidebar.map((item) => (
        <div key={item.id} className="px-3">
          <Link
            to={item.link}
            className="flex items-center cursor-pointer h-10 my-2 hover:bg-orange-400"
            >
            <p className="">{item.icon}</p>
            <p className="">{item.title}</p>
           
          </Link>
        </div>
      ))}
        </aside>
        {/* Section */}
        <section className={`ml-[${space}px]`}>
            <Navigate to={Children}/>
             
        </section>
    </div>
  )
}

export default Sidebar
