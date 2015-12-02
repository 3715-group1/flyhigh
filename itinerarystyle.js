@CHARSET "ISO-8859-1";

@CHARSET "UTF-8";
 
    
    body{
       background-color:#3fb0ac ; 
       background-image: url("./images/img.png");
       background-repeat: no-repeat;
       background-size: cover;
       background-attachment:fixed;
       font-family:"Arial", cursive, sans-serif; 
    } 
    
    img{
       height: 100px;
       width: 100px;
       border-style: solid;
       border-width: 2px;
       margin: 5px;
    }
 
     #header {
        border-radius: 25px;
        background-color:#173e43;
        color: white;
        text-align:center;
        clear: both;
        margin: 10px;
        padding:5px;  
        background-color:rgba(0, 0, 0, 0.2);      
    }
    
    #rates {
        border-radius: 25px;
        line-height:30px;
        background-color:#fae596;
        margin: 10px;
        padding: 10px;	  
        height:535px;
        float: left;  
        background-color:rgba(500, 950, 420, 0.4);  
    }
    
    #tripsummary {
        border-radius: 25px;
        line-height:30px;
        background-color:#fae596;
        margin: 20px 10px 10px 275px;
        padding: 20px;	  
        background-color:rgba(500, 950, 420, 0.4);  
    }
    
    #program {
        border-radius: 25px;
        line-height:30px;
        background-color:#fae596;
        margin: 20px 10px 10px 275px;
        padding: 20px;	  
        background-color:rgba(500, 950, 420, 0.4);  
    }
    
    #servicesincl {
        border-radius: 25px;
        line-height:30px;
        background-color:#fae596;
        margin: 10px 0px 20px 10px;
        padding:15px;	  
        width: 730px;
        float: left;  
        background-color:rgba(500, 950, 420, 0.4);  
    }
    
    #servicesexcl {
        border-radius: 25px;
        line-height:30px;
        background-color:#fae596;
        margin: 10px 0px 20px 10px;
        padding:15px;	  
        width: 730px;
        float: right;  
        background-color:rgba(500, 950, 420, 0.4);  
    }
    
    #comments {
        border-radius: 25px;
        line-height:30px;
        background-color:#fae596;
        margin: 0px 0px 10px 20px;
        padding:10px;	  
        width: 1500px;  
        background-color:rgba(500, 950, 420, 0.4); 
        clear: both; 
    }
    
    #travelerComments {
        border-radius: 25px;
        background-color:#fae596;
        margin: 0px 0px 10px 20px;
        padding:10px;	  
        width: 750px;  
        background-color:rgba(500, 950, 420, 0.4);  
    }

    #managerComments {
        border-radius: 25px;
        background-color:#fae596;
        margin: 0px 0px 10px 20px;
        padding:10px;	  
        width: 730px;  
        background-color:rgba(500, 950, 420, 0.4);  
    }
    
    #addButton{
        cursor:pointer; /*forces the cursor to change to a hand when the button is hovered*/
        padding:0px 10px; /*add some padding to the inside of the button*/
        background-color: #f3f3f3;; /*the colour of the button*/
        border:1px solid #f3f3f3; /*required or the default border for the browser will appear*/
        /*give the button curved corners, alter the size as required*/
        moz-border-radius: 10px;
        webkit-border-radius: 10px;
        border-radius: 10px;
        /*give the button a drop shadow*/
        webkit-box-shadow: 0 0 4px rgba(0,0,0, 0.75);
        moz-box-shadow: 0 0 4px rgba(0,0,0, 0.75);
        box-shadow: 0 0 4px rgba(0,0,0, 0.75);
        /*style the text*/
        color: #000000;
        }
        /***NOW STYLE THE BUTTON'S HOVER AND FOCUS STATES***/
        input#addButton:hover, input#addButton:focus{
        background-color: #C0C0C0; /*make the background a little darker*/
        /*reduce the drop shadow size to give a pushed button effect*/
        -webkit-box-shadow: 0 0 1px rgba(0,0,0, .75);
        -moz-box-shadow: 0 0 1px rgba(0,0,0, .75);
        box-shadow: 0 0 1px rgba(0,0,0, .75);
    }
    
    #resetButton{
        cursor:pointer; /*forces the cursor to change to a hand when the button is hovered*/
        padding:0px 10px; /*add some padding to the inside of the button*/
        background-color: #f3f3f3;; /*the colour of the button*/
        border:1px solid #f3f3f3; /*required or the default border for the browser will appear*/
        /*give the button curved corners, alter the size as required*/
        moz-border-radius: 10px;
        webkit-border-radius: 10px;
        border-radius: 10px;
        /*give the button a drop shadow*/
        webkit-box-shadow: 0 0 4px rgba(0,0,0, 0.75);
        moz-box-shadow: 0 0 4px rgba(0,0,0, 0.75);
        box-shadow: 0 0 4px rgba(0,0,0, 0.75);
        /*style the text*/
        color: #000000;
        }
        /***NOW STYLE THE BUTTON'S HOVER AND FOCUS STATES***/
        input#resetButton:hover, input#resetButton:focus{
        background-color: #FF0000; /*make the background a little darker*/
        /*reduce the drop shadow size to give a pushed button effect*/
        -webkit-box-shadow: 0 0 1px rgba(0,0,0, .75);
        -moz-box-shadow: 0 0 1px rgba(0,0,0, .75);
        box-shadow: 0 0 1px rgba(0,0,0, .75);    
    }
    
    
    ul#commentlist {
        padding: 10px;
    }
    
    ul#commentlist li {
        display: block;
        background-color: #C0C0C0;
        color: black;
        padding: 10px 20px 10px 10px;
        margin: 10px;
        text-decoration: none;
        border-radius: 20px;
    }
    
    ul#commentlist li a:hover {
        background-color: orange;
    }
    
    ul#manager {
        padding: 10px;
    }
    
    ul#manager li {
        display: block;
        background-color: #C0C0C0;
        color: black;
        padding: 10px 20px 10px 10px;
        margin: 10px;
        text-decoration: none;
        border-radius: 20px;
    }
    
    ul#manager li a:hover {
        background-color: orange;
    }
 
    
    #map{
	    margin: 20px 0px 10px 0px;
	    padding: 10px;
	    clear: both;
	    border: 2px solid black;
	    border-radius: 20px
    }
    
    #footer {
        border-radius: 25px 25px 0px 0px;
        background-color:#173e43;
        color:white;
        clear:both;
        text-align:center;
        margin: 10px;
        padding:5px;
        clear: both;
        background-color:rgba(0, 0, 0, 0.1);
    }

   
}

