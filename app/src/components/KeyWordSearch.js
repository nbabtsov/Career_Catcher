import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    position: relative;
    color: #2EC5F0;
    z-index: 1;
    text-transform: uppercase;
    font-size: 0.85em;
    text-shadow: 0 4px 2px #000;
    
    h2 {
        margin: 0px 0px 25px 100px;
    }
`
const Bar = styled.section`
    position: relative;
    padding: 1em 1em 2em 1em;
    background: #2b283d;

    @media (min-width: 800px) {
        font-size: 2.25em;
        max-width: 700px;
        margin: auto;
    }
`
const color = {
    spectrum1: '#2E70E7',
    spectrum2: '#8357D1',
    spectrum3: '#BD4E9F',
    spectrum4: '#DD4426',
    spectrum5: '#CB2A14',
}

const KeywordSearchBar = styled.input`
    position: relative;
    height: 2em;
    line-height: 2em;
    font-size: 0.85em;
    padding: 0 0.5em;
    width: 95%;
    margin: 0.1em;
    border: 3px solid black;
    color: inherit;
    background: inherit;
    text-align: inherit;

    &:focus {
        outline: 2px solid #fff;
        outline-offset: 0.15em;
    }
`
const Contain = styled.div`
    height: 0.75em;
    width: 100%;
    transform-origin: bottom;

    &:nth-child(1n) {
        background: ${color.spectrum1};
    }
    &:nth-child(2n) {
        background: ${color.spectrum2};
    }
    &:nth-child(3n) {
        background: ${color.spectrum3};
    }
    &:nth-child(4n) {
        background: ${color.spectrum4};
    }
    &:nth-child(5n) {
        background: ${color.spectrum5};
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

const KeyWordSearch = (props) => {
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
            value={props.searchQuery}
            onChange={e => props.onChange(e.target.value)}
        />
    </Bar>
    )
}

export default KeyWordSearch
