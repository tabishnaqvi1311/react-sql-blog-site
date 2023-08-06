import React from 'react'
import Edit from '../assets/edit.png'
import Delete from '../assets/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
    return (
        <div className='flex gap-12'>
            <div className='flex-[5] flex flex-col gap-7'>
                <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-[100%] h-[300px] object-cover' />
                <div className='flex items-center gap-3'>
                    <img src='https://images.pexels.com/photos/4668509/pexels-photo-4668509.jpeg' className='w-[50px] h-[50px] object-cover rounded-full' />
                    <div className='text-sm'>
                        <span className='font-bold'>Johnette</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className='flex gap-1'>
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} className='h-[25px] w-[25px] cursor-pointer' />
                        </Link>
                        <img src={Delete} className='h-[25px] w-[25px] cursor-pointer' />
                    </div>
                </div>
                <h1 className='text-5xl text-[#333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus fuga</h1>
                <p className='text-justify leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus adipisci perferendis porro quae quisquam saepe iste architecto culpa. Minima quisquam reiciendis quaerat doloribus eaque amet voluptatibus provident natus recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Fugiat natus in sit non aspernatur quibusdam velit tempora doloribus qui dolorum! Adipisci ab, soluta ea quidem porro impedit similique quaerat quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda iste cupiditate corrupti voluptatem incidunt recusandae ipsam quo unde nam libero maiores saepe soluta nemo quis, quibusdam aliquid, eligendi amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Aut ullam, atque porro, saepe maiores voluptates, iste est magni quo doloribus quos. Maxime sint, nemo explicabo omnis quae alias qui libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo dolore voluptates molestias non, quo perferendis ipsum debitis adipisci suscipit consequuntur autem et culpa consequatur? Totam molestiae ea esse eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam qui esse est adipisci tenetur commodi? Eos ipsam veritatis praesentium molestiae, ipsum adipisci impedit ea, illum itaque ad rem accusamus?
                </p>
            </div>
            <Menu />
        </div>
    )
}

export default Single
