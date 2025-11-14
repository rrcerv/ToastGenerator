class ToastGenerator{
    constructor(lang='en'){
        this.language = lang;
        console.log(this.language);
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this.init);
        } else {
            this.init();
        }

        this.languageDefinitions();
    }

    languageDefinitions(){
        if(this.language == 'pt'){
            this.dangerDescriptor = 'Erro';
            this.successDescriptor = 'Sucesso';
        } else {
            this.dangerDescriptor = 'Error';
            this.successDescriptor = 'Success';
        }
    }

    init(){

        if(document.querySelectorAll('.toast-div-879o2879ksh').length == 0){
            let toastDiv = document.createElement('div');
            toastDiv.classList.add('toast-div-879o2879ksh');
            document.body.appendChild(toastDiv);
        }

        const style = document.createElement('style');
        style.innerHTML = `
        @media screen and (min-width: 1000px) {
    .toast-div-879o2879ksh{
        position:fixed;
        top:0;
        right: 0;

        width:20vw;
        height: 100vh;
        display:flex;
        flex-direction: column;

        overflow-y: auto;

    }
}

.toast-notation-success-879o2879ksh{
    height: 100%;
    width:5%;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;

    position: absolute;
    top:0;
    left:0;

    background-color: #46D664;
}

.toast-879o2879ksh{
    position:relative;
    display:flex;
    align-items: center;

    width: calc(100%-20px);
    padding: 20px;

    background-color: #ffffff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius:13px;
    margin-bottom:5px;

    animation: fade-out-toast-879o2879ksh 7s forwards;
}

.danger-879o2879ksh{
    border: 1px solid #FF355B;
}

.success-879o2879ksh{
    border: 1px solid #46D664;
}

.icon-notation-879o2879ksh{
    margin-right: 5%;
    width: 40px;
    height: 40px;
}

.toast-notation-danger-879o2879ksh{
    height: 100%;
    width:5%;

    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;

    position: absolute;
    top:0;
    left:0;


    background-color: #FF355B;
}

.toast-text-879o2879ksh{
    display:flex;
    flex-direction: column;
    width:100%;
}

.toast-text-descriptor-879o2879ksh{
    font-size:1.15rem;
}

@keyframes fade-out-toast-879o2879ksh{
    0%{
        opacity:100%;
    }
    80%{
        opacity:100%;
    }
    99%{
        opacity: 0%;
        display:flex;
    }
    100%{
        opacity:0%;
        display:none;
    }
}

@media screen and (max-width: 1000px) {
    .toast-div-879o2879ksh{
        position:fixed;
        top:0;
        right: 0;

        width:100vw;
        height: 50vh;
        display:flex;
        flex-direction: column;

        overflow-y: auto;

    }
}
`
        document.head.appendChild(style);
        
    }

    danger(message){
        console.log(this.language)
        let dangerMessage = document.createElement('div');
        dangerMessage.classList.add('toast-879o2879ksh')
        dangerMessage.classList.add('danger-879o2879ksh')

        let dangerMessageNotation = document.createElement('div');
        dangerMessageNotation.classList.add('toast-notation-danger-879o2879ksh');
        dangerMessage.appendChild(dangerMessageNotation);

        let iconDiv = document.createElement('div');
        iconDiv.classList.add('icon-notation-879o2879ksh');
        iconDiv.innerHTML = '<svg fill="#FF355B" width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="Icons" x="-704" y="-64" width="1280" height="800" style="fill:none;"></rect> <g id="Icons1" serif:id="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serif:id="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <path id="error-circle" d="M32.085,56.058c6.165,-0.059 12.268,-2.619 16.657,-6.966c5.213,-5.164 7.897,-12.803 6.961,-20.096c-1.605,-12.499 -11.855,-20.98 -23.772,-20.98c-9.053,0 -17.853,5.677 -21.713,13.909c-2.955,6.302 -2.96,13.911 0,20.225c3.832,8.174 12.488,13.821 21.559,13.908c0.103,0.001 0.205,0.001 0.308,0Zm-0.282,-4.003c-9.208,-0.089 -17.799,-7.227 -19.508,-16.378c-1.204,-6.452 1.07,-13.433 5.805,-18.015c5.53,-5.35 14.22,-7.143 21.445,-4.11c6.466,2.714 11.304,9.014 12.196,15.955c0.764,5.949 -1.366,12.184 -5.551,16.48c-3.672,3.767 -8.82,6.016 -14.131,6.068c-0.085,0 -0.171,0 -0.256,0Zm-12.382,-10.29l9.734,-9.734l-9.744,-9.744l2.804,-2.803l9.744,9.744l10.078,-10.078l2.808,2.807l-10.078,10.079l10.098,10.098l-2.803,2.804l-10.099,-10.099l-9.734,9.734l-2.808,-2.808Z"></path> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g id="coffee-beans"> <g id="coffee-bean1" serif:id="coffee-bean"> </g> </g> <g id="coffee-bean-filled"> </g> <g id="coffee-beans-filled"> <g id="coffee-bean2" serif:id="coffee-bean"> </g> </g> <g id="clipboard"> </g> <g id="clipboard-paste"> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g></svg>'
        dangerMessage.appendChild(iconDiv);

        let messageDiv = document.createElement('div');
        messageDiv.classList.add('toast-text-879o2879ksh');

        let messageDescriptor = document.createElement('div');
        messageDescriptor.classList.add('toast-text-descriptor-879o2879ksh')
        messageDescriptor.innerHTML = `<strong>${this.dangerDescriptor}</strong>`
        messageDiv.appendChild(messageDescriptor);

        let messageTextDiv = document.createElement('div');
        messageTextDiv.textContent = message;
        messageDiv.appendChild(messageTextDiv);
        dangerMessage.appendChild(messageDiv);



        document.querySelector('.toast-div-879o2879ksh').appendChild(dangerMessage)
    }

    success(message){

        let successMessage = document.createElement('div');
        successMessage.classList.add('toast-879o2879ksh')
        successMessage.classList.add('success-879o2879ksh')


        let successMessageNotation = document.createElement('div');
        successMessageNotation.classList.add('toast-notation-success-879o2879ksh');
        successMessage.appendChild(successMessageNotation);


        let iconDiv = document.createElement('div');
        iconDiv.classList.add('icon-notation-879o2879ksh');
        iconDiv.innerHTML = '<svg width="100%" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#46D664"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#46D664" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path></g></svg>'
        successMessage.appendChild(iconDiv);

        
        let messageDiv = document.createElement('div');
        messageDiv.classList.add('toast-text-879o2879ksh');

        let messageDescriptor = document.createElement('div');
        messageDescriptor.classList.add('toast-text-descriptor-879o2879ksh')

        messageDescriptor.innerHTML = `<strong>${this.successDescriptor}</strong>`
        
        messageDiv.appendChild(messageDescriptor);

        let messageTextDiv = document.createElement('div');
        messageTextDiv.textContent = message;
        messageDiv.appendChild(messageTextDiv);
        successMessage.appendChild(messageDiv);

        document.querySelector('.toast-div-879o2879ksh').appendChild(successMessage)
    }

}
