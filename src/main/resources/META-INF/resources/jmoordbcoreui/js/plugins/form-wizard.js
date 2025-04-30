(function () {
    "use strict";
    /*---------------------------------------------------------------------
     Fieldset
     -----------------------------------------------------------------------*/
    const loaderInit = () => {

        console.log("...loaderInit form-wizard.js from avbravo");
        document.getElementById("account").classList.remove("done");
        document.getElementById("personal").style.display = "none";
        ;
        document.getElementById("payment").style.display = "none";
        document.getElementById("confirm").style.display = "none";
    }
    let currentTab = 0;
    const ActiveTab = (n) => {
        console.log("---> valor de n "+n);
        if (n == 0) {
            document.getElementById("account").classList.add("active");
            document.getElementById("account").classList.remove("done");
            document.getElementById("personal").classList.remove("done");
            document.getElementById("personal").classList.remove("active");
        }
        if (n == 1) {
            document.getElementById("account").classList.add("done");
            document.getElementById("personal").classList.add("active");
            document.getElementById("personal").classList.remove("done");
            document.getElementById("payment").classList.remove("active");
            document.getElementById("payment").classList.remove("done");
            document.getElementById("confirm").classList.remove("done");
            document.getElementById("confirm").classList.remove("active");

        }
        if (n == 2) {
            document.getElementById("account").classList.add("done");
            document.getElementById("personal").classList.add("done");
            document.getElementById("payment").classList.add("active");
            document.getElementById("payment").classList.remove("done");
            document.getElementById("confirm").classList.remove("done");
            document.getElementById("confirm").classList.remove("active");
        }
        if (n == 3) {
            document.getElementById("account").classList.add("done");
            document.getElementById("personal").classList.add("done");
            document.getElementById("payment").classList.add("done");
            document.getElementById("confirm").classList.add("active");
            document.getElementById("confirm").classList.remove("done");
        }
    }
    const showTab = (n) => {
        var x = document.getElementsByTagName("fieldset");
        x[n].style.display = "block";
        console.log(n);
        ActiveTab(n);

    }
    const nextBtnFunction = (n) => {
        var x = document.getElementsByTagName("fieldset");
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        showTab(currentTab);
    }

    const nextbtn = document.querySelectorAll('.next')
    Array.from(nextbtn, (nbtn) => {
        nbtn.addEventListener('click', function ()
        {
            nextBtnFunction(1);
        })
    });

// previousbutton

    const prebtn = document.querySelectorAll('.previous')
    Array.from(prebtn, (pbtn) => {
        pbtn.addEventListener('click', function ()
        {
            nextBtnFunction(-1);
        })
    });

})()