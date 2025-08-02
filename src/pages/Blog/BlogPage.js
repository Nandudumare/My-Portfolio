import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AiOutlineHome } from "react-icons/ai";

import './BlogPage.css'
import { SingleBlog } from '../../components'
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import { headerData } from '../../data/headerData'

function BlogPage() {

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = blogData.filter((blog) => {
        const content = blog.title + blog.description + blog.date
        return content.toLowerCase().includes(search.toLowerCase())
    })




    return (
        <div className="blogPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                <title>{headerData.name} | Blog</title>
            </Helmet>
            <div className="blogPage--header" style={{backgroundColor: theme.primary}}>
                <Link to="/">
                    <AiOutlineHome style={{}}/>
                </Link>
                <h1 style={{color: theme.secondary}}>Blogs</h1>
            </div>
            <div className="blogPage--container">
                <div className="blog--search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach blog..." style={{}}/>
                </div>
                <div className="blogs--container">
                    <Grid className="blog-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.reverse().map(blog => (
                            <SingleBlog 
                                theme={theme}
                                title={blog.title}
                                desc={blog.description}
                                date={blog.date}
                                image={blog.image}
                                url={blog.url}
                                key={blog.id}
                                id={blog.id}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
