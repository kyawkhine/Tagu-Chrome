var regexMM = new RegExp("[\u1000-\u109f\uaa60-\uaa7f]+");
var regexUni = new RegExp("[ဃငဆဇဈဉညဋဌဍဎဏဒဓနဘရဝဟဠအ]\u103a|\u103b[က-အ]\u102b|\u103b[ါ-း]|\u103e|\u103f|\u1031$|\u1031[က-အ]\u1032|\u1025\u102f|\u103c\u103d[\u1000-\u1001]|ည်း|ျင်း|င်|န်း|ျာ|င့်");
var regexZG = new RegExp("\s\u1031| ေ[က-အ]ှ|[က-အ]း|\u107e[က-အ]|\u1039[^က-အ]|\u1039$|\u1039\s|^\u1031|\u103a[\u102a-\u1039]|\u107f[က-အ]|\u102d\u1033|\s\u103b|^\u103b|\u0020\u103b|\u0020\u1031|[၀-၉]\u1031|[\u102b-\u1039]\u1031|\u1064[\u102b\u102c]|\u1073[\u102d\u102e\u103a-\u103e]|ြွ|[\u102b-\u1032]\u103b|\u1080[က-အ]|\u102f[\u102d]|\u1039[\u102b-\u103f]");

var timerID = undefined;
var mmFonts = new RegExp("Zawgyi-One|Masterpiece Uni Sans|Myanmar3|Yunghkio|Parabaik|WinUni Innwa|Win Uni Innwa|Padauk|MyMyanmar|Panglong|TharLon");
//var unicodeFonts = new RegExp("MON3 Anonta 1 | Masterpiece Uni Sans|Myanmar3|Yunghkio|Parabaik|WinUni Innwa|Win Uni Innwa|Padauk|MyMyanmar|Panglong|TharLon|Myanmar Sangam");
//var useUnicodeFont = "'MON3 Anonta 1',TharLon,'Masterpiece Uni Sans','Myanmar Sangam MN',Myanmar3,Yunghkio,Parabaik,'WinUni Innwa','Win Uni Innwa',Padauk,Panglong,'MyMyanmar Unicode','Myanmar MN'";

var facebook_wordbreaking_classes = ['messageBody', 'commentBody', 'uiAttachmentTitle', 'uiAttachmentDesc', 'ministoryInlineMessage', 'msg'];
/*
var dummySpanEl = document.createElement('span');
dummySpanEl.style.fontFamily = useUnicodeFont;
useUnicodeFont = dummySpanEl.style.fontFamily;
*/
//create font face CSS Unicode
/*var styleNode           = document.createElement ("style");
styleNode.type          = "text/css";
styleNode.textContent   = "@font-face { font-family: 'MON3 Anonta 1'; src: local('MON3 Anonta 1'),url('"
                        + chrome.extension.getURL ("fonts/mon3.ttf")
                        + "'); }"
                        ;
document.head.appendChild (styleNode);
*/


// JavaScript Document
function Z1_Uni(input)
{
  var output=input;

   var tallAA = "\u102B";
   var AA = "\u102C";
   var vi = "\u102D";
   // lone gyi tin
   var ii = "\u102E";
   var u = "\u102F";
   var uu = "\u1030";
   var ve = "\u1031";
   var ai = "\u1032";
   var ans = "\u1036";
   var db = "\u1037";
   var visarga = "\u1038";

   var asat = "\u103A";

   var ya = "\u103B";
   var ra = "\u103C";
   var wa = "\u103D";
   var ha = "\u103E";
   var zero = "\u1040";
   
   
   output =  output.replace( /\u106A/g, " \u1009");
   output =  output.replace( /\u1025(?=[\u1039\u102C])/g, "\u1009"); //new
    output =  output.replace( /\u1025\u102E/g, "\u1026"); //new
   output =  output.replace( /\u106B/g, "\u100A");
   output =  output.replace( /\u1090/g, "\u101B");
   output =  output.replace( /\u1040/g, zero);

   output =  output.replace( /\u108F/g, "\u1014");
   output =  output.replace( /\u1012/g, "\u1012");
   output =  output.replace( /\u1013/g, "\u1013");
   /////////////


   output =  output.replace( /[\u103D\u1087]/g, ha);
   // ha
   output =  output.replace( /\u103C/g, wa);
   // wa
   output =  output.replace( /[\u103B\u107E\u107F\u1080\u1081\u1082\u1083\u1084]/g, ra);
   // ya yint(ra)
   output =  output.replace( /[\u103A\u107D]/g, ya);
   // ya

   output =  output.replace( /\u103E\u103B/g, ya + ha);
   // reorder

   output =  output.replace( /\u108A/g, wa + ha);
   output =  output.replace( /\u103E\u103D/g, wa + ha);
   // wa ha

   ////////////////////// Reordering

   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u1064/g, "\u1064$1$2$3");
   // reordering kinzi
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108B/g, "\u1064$1$2$3\u102D");
   // reordering kinzi lgt
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108C/g, "\u1064$1$2$3\u102E");
   // reordering kinzi lgtsk
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108D/g, "\u1064$1$2$3\u1036");
   // reordering kinzi ttt

   ////////////////////////////////////////

   output =  output.replace( /\u105A/g, tallAA + asat);
   output =  output.replace( /\u108E/g, vi + ans);
   // lgt ttt
   output =  output.replace( /\u1033/g, u);
   output =  output.replace( /\u1034/g, uu);
   output =  output.replace( /\u1088/g, ha+u);
   // ha  u
   output =  output.replace( /\u1089/g, ha+uu);
   // ha  uu

   ///////////////////////////////////////

   output =  output.replace( /\u1039/g, "\u103A");
   output =  output.replace( /[\u1094\u1095]/g, db);
   // aukmyint

   ///////////////////////////////////////Pasint order human error
    output =  output.replace( /([\u1000-\u1021])([\u102C\u102D\u102E\u1032\u1036]){1,2}([\u1060\u1061\u1062\u1063\u1065\u1066\u1067\u1068\u1069\u1070\u1071\u1072\u1073\u1074\u1075\u1076\u1077\u1078\u1079\u107A\u107B\u107C\u1085])/g, "$1$3$2");  //new
   
   
   
   /////////////

   output =  output.replace( /\u1064/g, "\u1004\u103A\u1039");

   output =  output.replace( /\u104E/g, "\u104E\u1004\u103A\u1038");

   output =  output.replace( /\u1086/g, "\u103F");

   output =  output.replace( /\u1060/g, '\u1039\u1000');
   output =  output.replace( /\u1061/g, '\u1039\u1001');
   output =  output.replace( /\u1062/g, '\u1039\u1002');
   output =  output.replace( /\u1063/g, '\u1039\u1003');
   output =  output.replace( /\u1065/g, '\u1039\u1005');
   output =  output.replace( /[\u1066\u1067]/g, '\u1039\u1006');
   output =  output.replace( /\u1068/g, '\u1039\u1007');
   output =  output.replace( /\u1069/g, '\u1039\u1008');
   output =  output.replace( /\u106C/g, '\u1039\u100B');
   output =  output.replace( /\u1070/g, '\u1039\u100F');
   output =  output.replace( /[\u1071\u1072]/g, '\u1039\u1010');
   output =  output.replace( /[\u1073\u1074]/g, '\u1039\u1011');
   output =  output.replace( /\u1075/g, '\u1039\u1012');
   output =  output.replace( /\u1076/g, '\u1039\u1013');
   output =  output.replace( /\u1077/g, '\u1039\u1014');
   output =  output.replace( /\u1078/g, '\u1039\u1015');
   output =  output.replace( /\u1079/g, '\u1039\u1016');
   output =  output.replace( /\u107A/g, '\u1039\u1017');
   output =  output.replace( /\u107B/g, '\u1039\u1018');
   output =  output.replace( /\u107C/g, '\u1039\u1019');
   output =  output.replace( /\u1085/g, '\u1039\u101C');
   output =  output.replace( /\u106D/g, '\u1039\u100C');

   output =  output.replace( /\u1091/g, '\u100F\u1039\u100D');
   output =  output.replace( /\u1092/g, '\u100B\u1039\u100C');
   output =  output.replace( /\u1097/g, '\u100B\u1039\u100B');
   output =  output.replace( /\u106F/g, '\u100E\u1039\u100D');
   output =  output.replace( /\u106E/g, '\u100D\u1039\u100D');

   /////////////////////////////////////////////////////////

   output =  output.replace( /(\u103C)([\u1000-\u1021])(\u1039[\u1000-\u1021])?/g, "$2$3$1");
   // reordering ra
   
   //output =  output.replace( /(\u103E)?(\u103D)?([\u103B\u103C])/g, "$3$2$1");
   // reordering ra
   
   output =  output.replace( /(\u103E)(\u103D)([\u103B\u103C])/g, "$3$2$1");
    output =  output.replace( /(\u103E)([\u103B\u103C])/g, "$2$1");
    
    output =  output.replace( /(\u103D)([\u103B\u103C])/g, "$2$1");
   
  


  
   
   
   output = output.replace(/(([\u1000-\u101C\u101E-\u102A\u102C\u102E-\u103F\u104C-\u109F]))(\u1040)(?=\u0020)?/g, function($0, $1)
   {
      return $1 ? $1 + '\u101D' : $0 + $1;

   }
   );
   // zero and wa
   
   
    output = output.replace(/((\u101D))(\u1040)(?=\u0020)?/g, function($0, $1)
   {
      return $1 ? $1 + '\u101D' : $0 + $1;

   }
   );
   // zero and wa
   
   
 


   output = output.replace(/(([\u1000-\u101C\u101E-\u102A\u102C\u102E-\u103F\u104C-\u109F\u0020]))(\u1047)/g, function($0, $1)
   {
      return $1 ? $1 + '\u101B' : $0 + $1;

   }
   );
   // seven and ra

   output =  output.replace( /(\u1047)( ? = [\u1000 - \u101C\u101E - \u102A\u102C\u102E - \u103F\u104C - \u109F\u0020])/g, "\u101B");
   // seven and ra
   

  /* output =  output.replace( /(\u1031)?([\u1000-\u1021])(\u1039[\u1000-\u1021])?([\u102D\u102E\u1032])?([\u1036\u1037\u1038]{0,2})([\u103B-\u103E]{0,3})([\u102F\u1030])?([\u102D\u102E\u1032])?/g, "$2$3$6$1$4$8$7$5");
   // reordering storage order*/
   
   output =  output.replace( /(\u1031)?([\u1000-\u1021])(\u1039[\u1000-\u1021])?([\u102D\u102E\u1032])?([\u1036\u1037\u1038]{0,2})([\u103B-\u103E]{0,3})([\u102F\u1030])?([\u1036\u1037\u1038]{0,2})([\u102D\u102E\u1032])?/g, "$2$3$6$1$4$9$7$5$8");
   // reordering storage order 
   output = output.replace(ans+u, u+ans);
   
    output =  output.replace( /(\u103A)(\u1037)/g, "$2$1");
   // For Latest Myanmar3


   return output;


}//Z1_Uni

function tagPage()
{  
    for (var i = 0; i < facebook_wordbreaking_classes.length; i++) {
    
        var els = document.getElementsByClassName(facebook_wordbreaking_classes[i])
  

        for (var j = 0; j < els.length; j++) {

	 var thisNode = els[j];
            var text = thisNode.textContent;
        
            if (!regexMM.test(text)) {
                continue;
            }
        
            var computedStyles = document.defaultView.getComputedStyle(thisNode, null);
        
/*            if (computedStyles.fontFamily.indexOf(useUnicodeFont) == -1 && unicodeFonts.test(computedStyles.fontFamily)) {
                thisNode.style.fontFamily = computedStyles.fontFamily + "," + useUnicodeFont;
                continue;
            }
*/        
           if (mmFonts.test(computedStyles.fontFamily)) {
                continue;
            }
        
/*            if (regexUni.test(text) && !regexZG.test(text)) {
                

            } 
*/
	    if (!regexUni.test(text) && regexZG.test(text)){

		//text=zg2uni(text);
		thisNode.innerHTML=Z1_Uni(thisNode.innerHTML);
//		thisNode.style.fontFamily = computedStyles.fontFamily + "," + useUnicodeFont;
            }
        }
    }
    
    var el = document.getElementsByTagName('*');
     for (var i = 0; i < el.length; i++)
     {	 	
         var childs = el[i].childNodes;
         for (var j = 0; j < childs.length; j++)
         {	
             var thisNode = childs[j];
             if (thisNode.nodeType == 3) {
    
                 var prNode = thisNode.parentNode;
                 var text = thisNode.textContent;
                 if (!regexMM.test(text)) {
                     continue;

                 }

                 var computedStyles = document.defaultView.getComputedStyle(prNode, null);//check for font declaration
/*                 if (computedStyles.fontFamily.indexOf(useUnicodeFont) == -1 && unicodeFonts.test(computedStyles.fontFamily)){ 

                     prNode.style.fontFamily = useUnicodeFont; //check for unicode declaration

                     continue;
                 }
*/                 
                 if (mmFonts.test(computedStyles.fontFamily)) {                //check for zawgyi declaration             
                     continue;
                 }
 		// nofontfamily so unicode or zawgyi check mal

                 var nextNode = thisNode;

                    while (nextNode.nextSibling) {                                                         
                        nextNode = nextNode.nextSibling;
                        text += nextNode.textContent;
                    }
                     
                    if (text) {
			 if (!regexUni.test(text) && regexZG.test(text)) {
				prNode.innerHTML=Z1_Uni(prNode.innerHTML);
				//text=zg2uni(text);
				//prNode.textContent=text;
//				prNode.style.fontFamily = computedStyles.fontFamily + "," + useUnicodeFont;

                        }
                    }
             }
         }
     }
}




document.body.addEventListener("DOMNodeInserted", function () {
    if (timerID) {
        clearTimeout(timerID);
    }
    timerID = window.setTimeout(tagPage, 500);
}, false);
