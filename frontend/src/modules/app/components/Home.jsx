const Home = () => {
    return(
        <div className="d-flex flex-column align-items-center mt-5">
            <h2 className="mb-3 text-white">Hay 78 buses circulando</h2>
            <a class="btn btn-outline-danger mb-3" href="/bus" role="button">Persiguelos</a>
            <img src="/home-image.jpg" alt="Tranvias Coruña Bus" width="35%" height="25%"/>

        </div>
    );
};

export default Home;