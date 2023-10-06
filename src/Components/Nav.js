export function Nav(){
    return(
        <div class="navbar bg-danger mb-3 mx-1 px-3">
            <a class="navbar-brand">Flipkart</a>
            <div class="nav">
                <a href="#">HOME</a>
                <a href="#">CONTACT</a>
                <a href="#">BLOG</a>
                <a href="#">REVIEWS</a>
            </div>
            <button class="btn btn-outline btn-success">Order Now</button>
            <button class="btn btn-outline-warning">Add to Cart</button>
        </div>
    )
}