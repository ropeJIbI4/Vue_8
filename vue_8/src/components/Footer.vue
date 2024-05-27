<template>
    <div class="footer">
        <div class="footer__1">
            <div>
                <img class="footer__logo__1" src="/public/assets/Logo_header.png" alt="">
                <p class="footer__parag">It is a long established fact that a reader will be distracted lookings.</p>
                <div class="footer__logo__2">
                    <a href="#"><img src="/public/assets/twit.png" alt=""></a>
                    <a href="#"><img src="/public/assets/in.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="footer__2">
            <h3>Pages</h3><br>
            <ul>
                <li><a href="#">Home</a></li><br>
                <li><a href="#">Project</a></li><br>
                <li><a href="#">Blog</a></li><br>
            </ul>

        </div>
        <div class="footer__3">
            <h3>Contact</h3><br>
            <p>55 East Birchwood Ave.</p><br>
            <p>New York, NY 10001</p><br>
            <p>contact@interno.com</p> <br>
            <p>(123) 456 - 7890</p>
        </div>
    </div>
</template>

<style>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 65px;
    margin-top: 200px;
}

.footer__parag {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    padding-top: 10px;
    padding-bottom: 10px;

}

.footer__1 {
    width: 390px;
}

.footer__1 p {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    width: 290px;
}

.footer__2 {
    width: 390px;
    text-align: center
}

.footer__3 {
    width: 390px;
    text-align: center
}

.footer__3 h3 {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
}

.footer__3 p {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.footer__logo__1 {
    width: 120px;
}

.footer__logo__2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 15px;
}
</style>