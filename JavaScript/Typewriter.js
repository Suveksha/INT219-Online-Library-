var aText = new Array(
    "Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life.",
    "-Sidney Sheldon"
    );

var bText=new Array(
    "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
    "-George R.R. Martin"
);
    var iSpeed = 100; // time delay of print out
    var xSpeed=100;
    var iIndex = 0; // start printing array at this posision
    var xIndex=0;
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    var xScrollAt=20;
    var xArrLength=bText[0].length; 
    var iTextPos = 0; // initialise text position
    var xTextPos=0;
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
    var xRow;
    var xContents='';
     
    function typewriter1()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination1 = document.getElementById("typedtext1");
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination1.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter1()", 500);
      }
     } else
      {
      setTimeout("typewriter1()", iSpeed);
      }
    }
   
    function typewriter2()
    {
        xContents=' ';
        xRow=Math.max(0,xIndex-xScrollAt);
        var destination2=document.getElementById("typedtext2");
        while(xRow<xIndex)
        {
            xContents += bText[xRow++]+'<br />';
        }
        destination2.innerHTML=xContents+bText[xIndex].substring(0,xTextPos)+ "_";
        if(xTextPos++==xArrLength)
        {
            xTextPos=0;
            xIndex++;
            if(xIndex!=bText.length)
            {
                xArrLength=bText[xIndex].length;
                setTimeout("typewriter2()",500);
            }
        }
        else
        {
            setTimeout("typewriter2()",xSpeed);
        }
       
    }
    typewriter1();
    typewriter2();
    
