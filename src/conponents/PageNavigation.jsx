import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const PageNavigationItem = styled.div`
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1rem;'
  `

function PageNavigation({ title }) {
    return (
        <>
            <PageNavigationItem>
                <Link to="/">Home</Link>/{title}
            </PageNavigationItem>
        </>
    )
}

export default PageNavigation