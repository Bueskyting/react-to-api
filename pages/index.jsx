import axios from 'axios'
import Header from '../components/Header/Header'
import Wrapper from '../components/Wrapper/Wrapper'
import Card from '../components/Card/Card'

const Main = ({ games }) => {
  return (
    <div>
      <Header
        links={[
          { link: "https://www.youtube.com/@Fireship", title: "Tech news" },
          { link: "https://aws.amazon.com/what-is/api/#:~:text=APIs%20are%20mechanisms%20that%20enable,weather%20updates%20on%20your%20phone.", title: "What is an API" },
          { link: "https://www.mmobomb.com/api1/games?platform=pc", title: "Source" }
        ]}
      />
      <Wrapper>
        {games.map((game, index) => (
          <Card key={index} game={game}/>
        ))}
      </Wrapper>
    </div>
  )
}

export default Main

const getServerSideProps = async () => {
  const res = await axios.get('https://www.mmobomb.com/api1/games?platform=pc')
  const games = res.data

  return {
    props: {
      games,
    },
  }
}

export { getServerSideProps }