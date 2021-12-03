// variables
let contacts = document.querySelector('.nav-home')
let createnewcontact = document.querySelector('.nav')

//1st eventlistener
contacts.addEventListener("click", (e) => {
    let inside = contactList
    cleanupindex()
    renderIndex(inside)
    e.preventDefault()

})

//2nd eventlistener
createnewcontact.addEventListener("click", (e) => {
    let inside = contact
    cleanupindex()
    renderCreate(inside)
    e.preventDefault()
})

// Index Page
function cleanupindex() {
    const main = document.querySelector(".main")
    const p = document.querySelector('p'); {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
    }
}

const contact = {
    name: "Roberta Dobbs",
    phone: "778-555-1234",
    address: "101 Main St, Anytown, USA",
    email: "subgenius@slack.example.com",
}

function createSingleIndex(contact) {
    let a = document.createElement('a');
    a.setAttribute('href', 'page3.html');

    let div = document.createElement('div');
    div.setAttribute('class', 'contact');
    a.appendChild(div);

    let p = document.createElement('p')
    div.appendChild(p);
    p.textContent = `${contact["name"]}`;
    let main = document.querySelector(".main")
    main.appendChild(a)
    a.addEventListener("click", (e) => {
        for (let i = 0; i in contactList; i++) {
            if (p.textContent = contactList[i]) {
                cleanupindex()
                renderView(contact)
                e.preventDefault()
            }
        }
    })
}

let contactList = [{
        name: "Roberta Dobbs",
        phone: "778-555-1234",
        address: "101 Main St, Anytown, USA",
        email: "subgenius@slack.example.com",
    },
    {
        name: "Bugs Bunny",
        phone: "123-867-5309",
        address: "Warner Brothers Animation Lot",
        email: "whatsup@doc.example.com",
    },
    {
        name: "Zaafir Ali",
        phone: "911",
        address: "The dumpster",
        email: "waaf21@hotmail.com"
    }
]

function renderIndex(contactList) {
    for (let i = 0; i < contactList.length; i++) {
        let a = document.createElement('a');
        a.setAttribute('href', 'page2.html');

        let div = document.createElement('div');
        div.setAttribute('class', 'contact');
        a.appendChild(div);

        let p = document.createElement('p')
        div.appendChild(p)
        p.textContent = `${contactList[i]["name"]}`;
        let main = document.querySelector(".main");
        main.appendChild(a);
    }
}

// View Page
function cleanUpView() {
    const main = document.querySelector(".main");
    const contactname = document.querySelector(".contactname");
    if (contactname.textContent = 'Raquel Ervin')
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
}

function renderView(contact) {
    let img = document.createElement('img');
    img.setAttribute('src', './img/profile.jpg');
    img.setAttribute('class', 'profilepic');
    img.setAttribute('alt', 'Profile picture');

    let contactname = document.createElement('div');
    contactname.setAttribute('class', 'contactname');
    contactname.textContent = `${contact["name"]}`;
    contactname.appendChild(img);

    let contactinfo = document.createElement('div');
    contactinfo.setAttribute('class', 'contactinfo');
    contactinfo.appendChild(contactname);

    let contactemail = document.createElement('div');
    contactemail.setAttribute('class', 'contactemail');
    contactemail.textContent = `email: ${contact["email"]}`;
    contactinfo.appendChild(contactemail);

    let contactphone = document.createElement('div');
    contactphone.setAttribute('class', 'contactphone');
    contactphone.textContent = `cell: ${contact["phone"]}`;
    contactinfo.appendChild(contactphone);

    let contactaddress = document.createElement('div');
    contactaddress.setAttribute('class', 'contactaddress');
    contactaddress.textContent = `address: ${contact["address"]}`;
    contactinfo.appendChild(contactaddress);

    let buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');
    contactinfo.appendChild(buttons)

    let buttonedit = document.createElement('button');
    buttonedit.setAttribute('class', 'button edit');
    buttonedit.setAttribute('value', 'Edit')
    buttonedit.textContent = 'Edit';
    buttons.appendChild(buttonedit);

    let buttonclose = document.createElement('button');
    buttonclose.setAttribute('class', 'button close');
    buttonclose.setAttribute('value', 'Close');
    buttonclose.textContent = 'Close';
    buttons.appendChild(buttonclose)

    let main = document.querySelector('div');;
    main.appendChild(contactinfo)
    buttonclose.addEventListener("click", (e) => {
        cleanUpView()
        renderIndex(contactList)
        e.preventDefault()
    })
}

function cleanUpCreate() {
    const main = document.querySelector(".main");
    const button = document.querySelector("#extraphonefield");
    if (button.textContent = '+')
        while (main.firstChild) {
            main.firstChild.remove();
        }
}

function renderCreate() {
    //1st div
    let contactname = document.createElement('input');
    contactname.setAttribute('type', 'text');
    contactname.setAttribute('id', 'contactname');
    contactname.setAttribute('name', 'contactname');
    contactname.setAttribute('placeholder', 'Contact Name');

    let namefield = document.createElement('button');
    namefield.setAttribute('class', 'extrafield');
    namefield.setAttribute('id', 'extranamefield');
    namefield.setAttribute('name', 'extranamefield');
    namefield.textContent = '+';

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'inputcontainer');
    div1.appendChild(contactname);
    div1.appendChild(namefield);

    //2nd div
    let contactphone = document.createElement('input');
    contactphone.setAttribute('type', 'tel');
    contactphone.setAttribute('id', 'contactphone');
    contactphone.setAttribute('name', 'contactphone');
    contactphone.setAttribute('placeholder', 'Contact Phone');

    let phonefield = document.createElement('button');
    phonefield.setAttribute('class', 'extrafield');
    phonefield.setAttribute('id', 'extraphonefield');
    phonefield.setAttribute('name', 'extraphonefield');
    phonefield.textContent = '+';

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'inputcontainer');
    div2.appendChild(contactphone);
    div2.appendChild(phonefield);

    //3rd div
    let contactaddress = document.createElement('input');
    contactaddress.setAttribute('type', 'text');
    contactaddress.setAttribute('id', 'contactaddress');
    contactaddress.setAttribute('name', 'contactaddress');
    contactaddress.setAttribute('placeholder', 'Contact Address');

    let addressfield = document.createElement('button');
    addressfield.setAttribute('class', 'extrafield');
    addressfield.setAttribute('id', 'extraaddressfield');
    addressfield.setAttribute('name', 'extraaddressfield');
    addressfield.textContent = '+';

    let div3 = document.createElement('div');
    div3.setAttribute('class', 'inputcontainer');
    div3.appendChild(contactaddress);
    div3.appendChild(addressfield);

    //4th div
    let contactemail = document.createElement('input');
    contactemail.setAttribute('type', 'email');
    contactemail.setAttribute('id', 'contactemail');
    contactemail.setAttribute('name', 'contactemail');
    contactemail.setAttribute('placeholder', 'Contact Email');

    let emailfield = document.createElement('button');
    emailfield.setAttribute('class', 'extrafield');
    emailfield.setAttribute('id', 'extraemailfield');
    emailfield.setAttribute('name', 'extraemailfield');
    emailfield.textContent = '+';

    let div4 = document.createElement('div');
    div4.setAttribute('class', 'inputcontainer');
    div4.appendChild(contactemail);
    div4.appendChild(emailfield);

    //buttons
    let save = document.createElement('button');
    save.setAttribute('type', 'submit');
    save.setAttribute('class', 'button save');
    save.setAttribute('id', 'savecontact');
    save.setAttribute('name', 'savecontact');
    save.textContent = 'Save Contact';

    let cancel = document.createElement('button');
    cancel.setAttribute('type', 'reset');
    cancel.setAttribute('class', 'button cancel');
    cancel.setAttribute('id', 'cancel');
    cancel.setAttribute('name', 'cancel');
    cancel.textContent = 'Cancel';

    let divbuttons = document.createElement('div');
    divbuttons.setAttribute('class', 'buttons');
    divbuttons.appendChild(save);
    divbuttons.appendChild(cancel);

    //adding under parents
    let literalform = document.createElement('form');
    literalform.appendChild(div1);
    literalform.appendChild(div2);
    literalform.appendChild(div3);
    literalform.appendChild(div4);
    literalform.appendChild(divbuttons);

    let form = document.createElement('div');
    form.setAttribute('class', 'form');
    form.appendChild(literalform);

    //img
    let img = document.createElement('img');
    img.setAttribute('src', './img/profile.jpg');
    img.setAttribute('class', 'profilepic');
    img.setAttribute('alt', 'Profile picture');

    let contactimg = document.createElement('div');
    contactimg.setAttribute('class', 'contactimg')
    contactimg.appendChild(img);

    let contactedit = document.createElement('div');
    contactedit.setAttribute('class', 'contactedit');
    contactedit.appendChild(contactimg);
    contactedit.appendChild(form);

    let main = document.querySelector(".main")
    main.appendChild(contactedit);

}