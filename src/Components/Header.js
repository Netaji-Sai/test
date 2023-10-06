import "../../src/App.css";
function Header(){
    const myStyle ={
        color:"red",
        backgroundColor:"black"
    }
    return(
        <div class="bg-dark text-center text-light m-3 p-3">
            <h1 style={{color:"red"}}>Shopping Website!</h1>
            <h2 style={myStyle}>Low cost more products</h2>
            <p id="i1">Big Saving days are starting soon Explore!!</p>
        </div>
    );
}
export default Header;