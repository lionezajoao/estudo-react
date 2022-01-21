const optionMenu = document.getElementById("optionMenu");
const submitClientForm = document.getElementById("submitClientForm");

optionMenu.submitClient.onclick = () => {
    submitClientForm.removeAttribute('hidden');
    optionMenu.hidden = true;

    submitClientForm.submit.onclick = async () => {
        const name = submitClientForm.name.value;
        const regs = submitClientForm.regs.value;
        const json = await fetch(`/submitNewClient?name=${name}&regs=${regs}`)
    }
}
