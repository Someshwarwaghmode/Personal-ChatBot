var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+917666473300'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:someshwarwaghmode222@gimal.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Someshwarwaghmode'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/917666473300'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''>";
var resumeString = "<div class='resumeContainer'><img src='images/resume_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>SomeshwarWaghmodeResume.pdf</label></div><a href='assets/SomeshwarWaghmodeResume.pdf' download='SomeshwarWaghmodeResume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/dir//Moodbidri+private+Bus+Stand,+Bus+Stand+Rd,+Mudbidri,+Karnataka+574227/@13.0639,74.9991985,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba4ab3d49331379:0x17be05cb5b69caa2!2m2!1d74.9957298!2d13.0680955?hl=en' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

isEnter
function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("someshwar")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Someshwar B Waghmode</a>.</span><br><br>I am a Computer Engineering student at <span class='bold'>Indira College of Engineering And Management Pune👨🏻‍💻📚</span><br><br>I am passionate about learning and constantly upgrading my skills to become a successful computer engineer and make a meaningful impact in the tech world. As part of my journey, I have even created my personal chatbot to help me deal with my own problems.<br><br>Others are also eager to see what I become so it helpfull to other<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        
        

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation <br><br> Additional <br><br> My Ecomarce Website --> Send website to see it <br><br> My blog site --> Send blog to see it<br><br>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.E degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C<br>C & C++<br>pythom<br><br>CSS<br>HTML<br>JavaScript</span><br><br>I am well versed with following frameworks :<span class='bold'><br>ReactJs</span><br>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing B.E degree in Computer Science Engineering from ICEM Pune<br>Passing Year : 2026<br><br>I have completed my SSC from Maharashtra Secondary and Higher Secondary School, Moha<br>Passing Year:2020<br>Result:82.40%<br><br>I have completed my Secondary school from local school known as Yeogeshwari College Ambajogaiy<br>Passing Year:2022");
            break;

        
        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Someshwarwaghmode'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "hai":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "hello":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hi":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation <br><br> Additional <br><br> My Ecomarce Website --> Send website to see it <br><br> My blog site --> Send blog to see it<br>");
            break;
        
        case "hey":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
       

        case "someshwar":
            sendTextMessage("Yes, that's me");
            break;
        case "someshwar waghmode":
            sendTextMessage("Yes, that's me");
            break;
        case "someshwar b waghmode":
            sendTextMessage("Yes, that's me");
            break;
        
        case "website":
            sendTextMessage("You can check my website here <a target='_blank' href='https://ecommerce-site-git-main-someswars-projects-280902a8.vercel.app'>Someshwar Waghmode</a>");
            break;
        case "blog":
            sendTextMessage("You can check my blog here <a target='_blank' href='https://ecommerce-site-git-main-someswars-projects-280902a8.vercel.app'>Someshwar Waghmode</a>");
            break;
        
        case "github":
            sendTextMessage("You can check my github here <a target='_blank' href='https://github.com/Someshwarwaghmode'>Someshwar Waghmode</a>");
            break;
        case "linkedin":
            sendTextMessage("You can check my linkedin here <a target='_blank' href='https://www.linkedin.com/in/someshwarwaghmode1212'>Someshwar Waghmode</a>");
            break;
        case "friends":
        case "friend":
            sendTextMessage("I am always ready to make new friends");
            break;
        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("Hello "+name+"! How are you?");
            },2000);
            
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
