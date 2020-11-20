import styled from 'styled-components/macro'

export const Body = styled.div`
  background-color: #f5de9f;
`
export const Container = styled.div`
  width: 70%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 30px 0 25px;
  border-radius: 10px;
  opacity: 0.9;
  background: #fff;
`

export const Abilities = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
`

export const Title = styled.h3`
  padding-left: 12px;
  font-size: 2rem;
  font-weight: bolder;
`
export const SubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`
export const Text = styled.p`
  color: #757575;
  margin-left: 12px;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  background-color: #757575;

  &:hover {
    color: white;
  }
`

export const Types = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
`

export const Picture = styled.img`
  border: 0;
  width: 100%;
  max-width: 240px;
  align-self: center;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`
