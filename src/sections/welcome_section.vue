<template>
    <div class="container cover_page">
        <div class="row height-90">
            <div class="col-md-5 centralize-message">
                <div class="welcome-message">
                    <h1>
                        Free SEO <br> consultant here 
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde animi, non eius nulla illo sapiente assumenda repellat explicabo fuga officia dolorem tempore iste voluptates tenetur, voluptate harum recusandae voluptatem?
                    </p>
                    <div class="button-group">
                        <button class="btn btn-primary px-3 py-2">
                            Contact Now
                        </button>
                        <button class="btn btn-outline-dark px-3 py-2 ml-4">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <img class="cover_image" src="/img/coverImage2.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "welcomeSection"

}
</script>

<style lang="scss" scoped>

    .cover_page {
        height : 90vh;
    }

    .height-90 {
        height : 90%;
    }

    .centralize-message {
        display : flex;
        justify-content: center;
        align-items: center;
    }

    .welcome-message {
        text-align: left;
        font-family :'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    .button-group {
        margin-top : 2rem;
    }

    .cover_image {
        width : 90%;
        height : 80%;
    }

</style>