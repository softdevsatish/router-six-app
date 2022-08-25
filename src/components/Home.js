import { useNavigate } from 'react-router-dom';
function Home() {

    const navigate = useNavigate();

    function navToPage() {
        let x = false;
        if (x) {
            navigate('/about')
        }

        else {
            navigate('/filter')
        }
    }
    return (
        <div>
            <p>Home Page</p>

            <button onClick={() => navToPage()}>About Page</button> <br /><br />
            <button onClick={() => navigate('/filter')}>Filter Page</button>

        </div>
    )
}

export default Home;