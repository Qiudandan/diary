import React, {useState, useEffect} from 'react'
import {Card} from 'antd-mobile'
import {Link} from 'react-router-dom'
import axios from '../../utils/axios'
import './index.css'

const Home = () => {
    // 通过 useState Hook 函数定义 list 变量
    const [list, setList] = useState([])
    useEffect(() => {
        // 请求 list 接口，返回列表数据
        axios.get('/list').then(({data}) => {
            setList(data)
        })
    }, [])
    return (
        <div className='diary-list'>
            {
                list.map((item, index) => <Link
                    key={index}
                    to={{pathname: 'detail', search: `?id=${item.id}`}}><Card className='diary-item'>
                    <Card.Header
                        title={item.title}
                        thumb={item.url}
                        extra={<span>晴天</span>}
                    />
                    <Card.Body>
                        <div>{item.content}</div>
                    </Card.Body>
                    <Card.Footer content={item.date}/>
                </Card></Link>)
            }
        </div>
    )
}

export default Home
