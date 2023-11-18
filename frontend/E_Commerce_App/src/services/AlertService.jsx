import Swal from "sweetalert2";

export const AlertService = {
    showWaiting: function () {
        Swal.fire({
            showConfirmButton: false,
            text: "Lütfen Bekleyiniz...",
        });
    },
    showOk: function () {
        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
            text: "İşlem başarılı, Lütfen Bekleyiniz...",
        });
    },
    showError: function (errorModel) {
        console.error(errorModel);
        var errMsg = "";
        if (errorModel.err != null && !errorModel.traceId) {
            errMsg = errorModel.err;
        } else if (errorModel.errors != null && !errorModel.traceId) {
            errorModel.errors.forEach((item) => {
                errMsg += `<li>${item.error}</li>`;
            });
            errMsg = `<ul>${errMsg}</ul>`;
        } else if (errorModel.errors !== null && errorModel.traceId) {
            const displayObjectEntries = Object.entries(errorModel.errors);
            errMsg += displayObjectEntries?.map(([key, value]) => {
                return `<li>${key} : ${value}</li>`;
            });
            errMsg += `<ul>${errMsg[0]}</ul>`;
        } else {
            errMsg = "İşlem sırasında hata oluştu!";
        }
        Swal.fire({
            icon: "error",
            showConfirmButton: true,
            //   text: errMsg,
            html: errMsg,
            confirmButtonText: "Tamam",
        });
    },
    close: function () {
        Swal.close();
    },
};
