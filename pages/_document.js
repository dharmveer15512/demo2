import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
   
   
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    
  
    <link rel="stylesheet" href="assets/css/vendor/font-awesome.min.css"/>
    <link rel="stylesheet" href="assets/css/vendor/plaza-icon.css"/>
    <link rel="stylesheet" href="assets/css/vendor/jquery-ui.min.css"/>

   
    <link rel="stylesheet" href="assets/css/plugins/slick.css"/>
    <link rel="stylesheet" href="assets/css/plugins/animate.min.css"/>
    <link rel="stylesheet" href="assets/css/plugins/nice-select.css"/>
    <link rel="stylesheet" href="assets/css/plugins/venobox.min.css"/>

    
    <link rel="stylesheet" href="assets/css/style.css"/>

        </Head>
        <body>
          <Main />
          <NextScript /> 
          <script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>
    <script src="assets/js/vendor/jquery-3.5.1.min.js"></script>
    <script src="assets/js/vendor/jquery-migrate-3.3.0.min.js"></script>
    <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
    <script src="assets/js/vendor/jquery-ui.min.js"></script>

   
    <script src="assets/js/plugins/slick.min.js"></script>
    <script src="assets/js/plugins/material-scrolltop.js"></script>
    <script src="assets/js/plugins/jquery.nice-select.min.js"></script>
    <script src="assets/js/plugins/jquery.zoom.min.js"></script>
    <script src="assets/js/plugins/venobox.min.js"></script>

   


    <script src="assets/js/main.js"></script>
       
        </body>
      </Html>
    )
  }
}

export default MyDocument