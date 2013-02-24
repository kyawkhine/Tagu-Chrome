var regexMM = new RegExp("[\u1000-\u109f\uaa60-\uaa7f]+");
var regexUni = new RegExp("[ဃငဆဇဈဉညဋဌဍဎဏဒဓနဘရဝဟဠအ]်|ျ[က-အ]ါ|ျ[ါ-း]|\u103e|\u103f|\u1031[^\u1000-\u1021\u103b\u1040\u106a\u106b\u107e-\u1084\u108f\u1090]|\u1031$|\u1031[က-အ]\u1032|\u1025\u102f|\u103c\u103d[\u1000-\u1001]|ည်း|ျင်း|င်|န်း|ျာ|င့်");
var regexZG = new RegExp("\s\u1031| ေ[က-အ]်|[က-အ]း");
var timerID = undefined;
var mmFonts = new RegExp("Zawgyi-One|Masterpiece Uni Sans|Myanmar3|Yunghkio|Parabaik|WinUni Innwa|Win Uni Innwa|Padauk|MyMyanmar|Panglong|TharLon");
var unicodeFonts = new RegExp("MON3 Anonta 1 | Masterpiece Uni Sans|Myanmar3|Yunghkio|Parabaik|WinUni Innwa|Win Uni Innwa|Padauk|MyMyanmar|Panglong|TharLon|Myanmar Sangam");
var useUnicodeFont = "'MON3 Anonta 1',TharLon,'Masterpiece Uni Sans','Myanmar Sangam MN',Myanmar3,Yunghkio,Parabaik,'WinUni Innwa','Win Uni Innwa',Padauk,Panglong,'MyMyanmar Unicode','Myanmar MN'";

var facebook_wordbreaking_classes = ['messageBody', 'commentBody', 'uiAttachmentTitle', 'uiAttachmentDesc', 'ministoryInlineMessage', 'msg'];

var dummySpanEl = document.createElement('span');
dummySpanEl.style.fontFamily = useUnicodeFont;
useUnicodeFont = dummySpanEl.style.fontFamily;

//create font face CSS Unicode
var styleNode           = document.createElement ("style");
styleNode.type          = "text/css";
styleNode.textContent   = "@font-face { font-family: 'MON3 Anonta 1'; src: local('MON3 Anonta 1'),url('"
                        + chrome.extension.getURL ("fonts/mon3.ttf")
                        + "'); }"
                        ;
document.head.appendChild (styleNode);



//var myFunction= function(a)
//{

//a=zg2uni(a);
//alert(a);
//} 

function string2hex(i)
{
    switch (i){
            case 10 :
                tmp="A";
                break;
            case 11 :
                tmp="B";
                break;
            case 12:
                tmp="C";
                break;
            case 13:
                tmp="D";
                break;
            case 14:
                tmp="E";
                break;
            case 15:
                tmp="F";
                break;
            default:
                tmp=""+i;//make string
                break;
        }
    return tmp;
}

function zg2uni (input)
{
    var output = input;
    
    var zawgyi=new Array();
    var unicode=new Array();
    var inc=0;
    var tmp;//for looping tmp value
    var i;

    inc++;
    zawgyi[inc]=/(\u103D|\u1087)/g;
    unicode[inc]="\u103E";

    inc++;
    zawgyi[inc]=/\u103C/g;
    unicode[inc]="\u103D";

    inc++;
    zawgyi[inc]=/(\u103B|\u107E|\u107F|\u1080|\u1081|\u1082|\u1083|\u1084)/g;
    unicode[inc]="\u103C";

    inc++;
    zawgyi[inc]=/(\u103A|\u107D)/g;
    unicode[inc]="\u103B";

    inc++;
    zawgyi[inc]=/\u1039/g;
    unicode[inc]="\u103A";

    inc++;
    zawgyi[inc]=/\u106A/g;
    unicode[inc]="\u1009";
    
    inc++;
    zawgyi[inc]=/\u106B/g;
    unicode[inc]="\u100A";

    inc++;
    zawgyi[inc]=/\u106C/g;
    unicode[inc]="\u1039\u100B";

    inc++;
    zawgyi[inc]=/\u106D/g;
    unicode[inc]="\u1039\u100C";

    inc++;
    zawgyi[inc]=/\u106E/g;
    unicode[inc]="\u100D\u1039\u100D";

    inc++;
    zawgyi[inc]=/\u106F/g;
    unicode[inc]="\u100D\u1039\u100E";


    inc++;
    zawgyi[inc]= /\u1070/g;
    unicode[inc]= "\u1039\u100F";

    inc++;
    zawgyi[inc]= /(\u1071|\u1072)/g;
    unicode[inc]= "\u1039\u1010";


     //start U+106x
    //loop for pat sint 
    for(i=0;i<=5;i++)
    {
       
        
        if(i!=4) {
             inc++;
            zawgyi[inc]= new RegExp(String.fromCharCode("0x106"+i),"g");
            tmp=parseInt("106"+i, 16) - parseInt('60', 16);
            unicode[inc]="\u1039"+String.fromCharCode("0x"+tmp.toString(16));
        }
       
    }
    
    inc++;
    zawgyi[inc]=/(\u1066|\u1067)/g;
    unicode[inc]="\u1039\u1006";
    
    for(i=8;i<=9;i++)
    {
        inc++;
        zawgyi[inc]= new RegExp(String.fromCharCode("0x106"+i),"g");
        
        tmp=parseInt("106"+i, 16) - parseInt('61', 16);
        unicode[inc]="\u1039"+String.fromCharCode("0x"+tmp.toString(16));
    }

    inc++;
    zawgyi[inc]= new RegExp("(\u1073|\u1074)","g");
    unicode[inc]= "\u1039\u1011";
    
    for(i=5;i<=12;i++)
    {
        if(i!=11) {
            inc++;
            zawgyi[inc]= new RegExp(String.fromCharCode("0x107"+string2hex(i)),"g");

            tmp=parseInt("107"+string2hex(i), 16) - parseInt('63', 16);
            unicode[inc]="\u1039"+String.fromCharCode("0x"+tmp.toString(16));
        }
    }

    inc++;
    zawgyi[inc]=/\u1085/g;
    unicode[inc]='\u1039\u101C';


    inc++;
    zawgyi[inc]=/\u1033/g;
    unicode[inc]="\u102F";

    inc++;
    zawgyi[inc]=/\u1034/g;
    unicode[inc]="\u1030";

    inc++;
    zawgyi[inc]=/\u103F/g;
    unicode[inc]="\u1030";

    inc++;
    zawgyi[inc]=/\u1086/g;
    unicode[inc]="\u103F";

    inc++;
    zawgyi[inc]=/\u1088/g;
    unicode[inc]="\u103E\u102F";

    inc++;
    zawgyi[inc]=/\u1089/g;
    unicode[inc]="\u103E\u1030";

    inc++;
    zawgyi[inc]=/\u108A/g;
    unicode[inc]="\u103D\u103E";


    //kinzi list

    inc++;
    zawgyi[inc]=/([\u1000-\u1021])\u1064/g;
    unicode[inc]="\u1004\u103A\u1039$1";

    

    inc++;
    zawgyi[inc]=/([\u1000-\u1021])\u108B/g;
    unicode[inc]="\u1004\u103A\u1039$1\u102D";

    inc++;
    zawgyi[inc]=/([\u1000-\u1021])\u108C/g;
    unicode[inc]="\u1004\u103A\u1039$1\u102E";

    inc++;
    zawgyi[inc]=/([\u1000-\u1021])\u108D/g;
    unicode[inc]="\u1004\u103A\u1039$1\u1036";

    inc++;
    zawgyi[inc]=/\u108E/g;
    unicode[inc]="\u102D\u1036";

    inc++;
    zawgyi[inc]=/\u108F/g;
    unicode[inc]="\u1014";

    inc++;
    zawgyi[inc]=/\u1090/g;
    unicode[inc]="\u101B";

    inc++;
    zawgyi[inc]=/\u1091/g;
    unicode[inc]="\u100F\u1039\u1091";
    

    //fix ka bar
    inc++;
    zawgyi[inc]=/\u1019\u102C(\u107B|\u1093)/g;
    unicode[inc]="\u1019\u1039\u1018\u102C";

    inc++;
    zawgyi[inc]=/(\u107B|\u1093)/g;
    unicode[inc]="\u103A\u1018";

    inc++;
    zawgyi[inc]=/(\u1094|\u1095)/g;
    unicode[inc]="\u1037";

    //1096 á‚– zawgyi in unicod ??? I don't know
    inc++;
    zawgyi[inc]=/\u1096/g;
    unicode[inc]="\u1039\u1010\u103D";


    inc++;
    zawgyi[inc]=/\u1097/g;
    unicode[inc]="\u100B\u1039\u100B";

    inc++;
    zawgyi[inc]=/\u103C([\u1000-\u1021])([\u1000-\u1021])?/g;
    unicode[inc]="$1\u103C$2";

    inc++;
    zawgyi[inc]=/([\u1000-\u1021])\u103C\u103A/g;
    unicode[inc]="\u103C$1\u103A";

    inc++;
    zawgyi[inc]=/\u1031([\u1000-\u1021])(\u103E)?(\u103B)?/g;
    unicode[inc]="$1$2$3\u1031";

    inc++;
    zawgyi[inc]=/([\u1000-\u1021])\u1031(\u103B|\u103C|\u103D)/g;
    unicode[inc]="$1$2\u1031";

    inc++;
    zawgyi[inc]=/\u1032\u103D/g;
    unicode[inc]="\u103D\u1032";

    inc++;
    zawgyi[inc]=/\u103D\u103B/g;
    unicode[inc]="\u103B\u103D";

    //reorder
    inc++;
    zawgyi[inc]=/\u103A\u1037/g;
    unicode[inc]="\u1037\u103A";

    inc++;
    zawgyi[inc]=/(\u102F|\u1030)(\u102D|\u102E)/g;
    unicode[inc]="$2$1";

    inc++;
    zawgyi[inc]=/(\u103E)(\u103B|\u1037)/g;
    unicode[inc]="$2$1";

    inc++;
    zawgyi[inc]=/\u1025(\u103A|\u102C)/g;
    unicode[inc]="\u1009$1";

    inc++;
    zawgyi[inc]=/\u1025\u102E/g;
    unicode[inc]="\u1026";

    inc++;
    zawgyi[inc]=/\u1005\u103B/g;
    unicode[inc]="\u1008";

    inc++
    zawgyi[inc]=/\u1036(\u102F|\u1030)/g;
    unicode[inc]="$1\u1036";

    inc++
    zawgyi[inc]=/\u1031\u1037\u103E/g;
    unicode[inc]="\u103E\u1031\u1037";

    inc++
    zawgyi[inc]=/\u1031\u103E\u102C/g;
    unicode[inc]="\u103E\u1031\u102C";

    inc++;
    zawgyi[inc]=/\u105A/g;
    unicode[inc]="\u102B\u103A";

    inc++;
    zawgyi[inc]=/\u1031\u103B\u103E/g;
    unicode[inc]="\u103B\u103E\u1031";

    inc++;
    zawgyi[inc]=/(\u102D|\u102E)(\u103D|\u103E)/g;
    unicode[inc]="$2$1";

    inc++;
    zawgyi[inc]=/\u102C\u1039([\u1000-\u1021])/g;
    unicode[inc]="\u1039$1\u102C";


    inc++;
    zawgyi[inc]=/\u103C\u1004\u103A\u1039([\u1000-\u1021])/g;
    unicode[inc]="\u1004\u103A\u1039$1\u103C";

    inc++;
    zawgyi[inc]=/\u1039\u103C\u103A\u1039([\u1000-\u1021])/g;
    unicode[inc]="\u103A\u1039$1\u103C";

    inc++;
    zawgyi[inc]=/\u103C\u1039([\u1000-\u1021])/g;
    unicode[inc]="\u1039$1\u103C";

    inc++;
    zawgyi[inc]=/\u1036\u1039([\u1000-\u1021])/g;
    unicode[inc]="\u1039$1\u1036";

    inc++;
    zawgyi[inc]=/\u1092/g;
    unicode[inc]="\u100B\u1039\u100C";

    

    inc++;
    zawgyi[inc]=/\u104E/g; //áŽá€„á€ºá€¸
    unicode[inc]="\u104E\u1004\u103A\u1038";

    inc++;
    zawgyi[inc]=/\u1040(\u102B|\u102C|\u1036)/g;
    unicode[inc]="\u101D$1";

    inc++;
    zawgyi[inc]=/\u1025\u1039/g;
    unicode[inc]="\u1009\u1039"

    for(i=0;i<=inc;i++)
    {
        output=output.replace(zawgyi[i],unicode[i]);
    }
    return output;
}



   

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
        
            if (computedStyles.fontFamily.indexOf(useUnicodeFont) == -1 && unicodeFonts.test(computedStyles.fontFamily)) {
                thisNode.style.fontFamily = computedStyles.fontFamily + "," + useUnicodeFont;
                continue;
            }
        
            if (mmFonts.test(computedStyles.fontFamily)) {
                continue;
            }
        
            if (regexUni.test(text) && !regexZG.test(text)) {
                
		
            } else {

		text=zg2uni(text);
		thisNode.textContent=text;
		thisNode.style.fontFamily = computedStyles.fontFamily + "," + useUnicodeFont;
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
                 if (computedStyles.fontFamily.indexOf(useUnicodeFont) == -1 && unicodeFonts.test(computedStyles.fontFamily)){ 

                     prNode.style.fontFamily = useUnicodeFont; //check for unicode declaration

                     continue;
                 }
                 
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
                        if (regexUni.test(text) && !regexZG.test(text)) { //check whether unicode or zawgyi without font declaration

				prNode.style.fontFamily = computedStyles.fontFamily + "," + useUnicodeFont; //if unicode
			
                        } else {

				text=zg2uni(text);
				prNode.textContent=text;
				prNode.style.fontFamily = computedStyles.fontFamily + "," + useUnicodeFont;

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
