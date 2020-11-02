import React from 'react'
import styled, { keyframes } from 'styled-components'

const Header = styled.header`
    position: relative;
    color: #fff;
    z-index: 1;
    text-transform: uppercase;
    font-size: 0.85em;
    text-shadow: 0 3px 2px #000;

    h2 {
        margin: 0 0 0.5em 0;
    }
`
const Bar = styled.section`
    position: relative;
    max-width: 100%;
    font-size: 1.25em;
    padding: 1em 1em 2em 1em;
    background: #2b283d;

    @media (min-width: 800px) {
        font-size: 2.25em;
        max-width: 700px;
    }
`
const color = {
    spectrum1: '#5e9fff',
    spectrum2: '#5b56e8',
    spectrum3: '#b36bff',
    spectrum4: '#de56e8',
    spectrum5: '#ff598a',
}

const KeywordSearchBar = styled.input`
    position: relative;
    height: 2em;
    line-height: 2em;
    font-size: 0.85em;
    padding: 0 0.5em;
    width: 100%;
    margin: 0.15em;
    border: 1px solid black;
    color: inherit;
    background: inherit;
    text-align: inherit;

    &:focus {
        outline: 2px solid #fff;
        outline-offset: 0.15em;
    }
`
const Submit = styled.button`
    position: absolute;
    left: 50%;
    z-index: 1;
    overflow: hidden;
    margin: 0;
    background: transparent;
    color: #070222;
    background #fff;
    font-eight: bold;
    border: 0;
    cursor: pointer;
`
const Contain = styled.div`
    height: 0.5em;
    width: 20%;
    transform-origin: bottom;
    transition: all 1s;

    &:nth-child(1n) {
        background: ${color.spectrum1};
        animation-delay: 0;
    }
    &:nth-child(2n) {
        background: ${color.spectrum2};
        animation-delay: 50ms;
    }
    &:nth-child(3n) {
        background: ${color.spectrum3};
        animation-delay: 100ms;
    }
    &:nth-child(4n) {
        background: ${color.spectrum4};
        animation-delay: 150ms;
    }
    &:nth-child(5n) {
        background: ${color.spectrum5};
        animation-delay: 200ms;
    } 
`
const Spectrum = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: flex-end;
    pointer-events: none;
`

const KeyWordSearch = (searchQuery, setSearchQuery) => {
    return (
        <Bar>
            <Spectrum aria-hidden>
                {Array.from(Array(5)).map((_, i) => (
                    <Contain key={i}></Contain>
                ))}
            </Spectrum>
            <Header>
                <h2>Enter Your Keyword</h2>
            </Header>
            <KeywordSearchBar
                type="keyword"
                placeholder="Type Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Submit>Enter</Submit>
        </Bar>
    )
}

export default KeyWordSearch