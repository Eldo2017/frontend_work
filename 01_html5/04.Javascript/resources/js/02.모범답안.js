function validate() {
    // id : 첫 글자는 반드시 영문자, 영문자/숫자 포함 총 4~12자로 입력
    const idRegex = document.getElementById('id');
    let regExp = /^[a-z][a-z\d]{3,11}$/i;
    if(!regExp.test(idRegex.value)) {
        alert('아이디를 조건에 맞춰 다시 입력하세요.');
        idRegex.value='';
        idRegex.focus();
        return false;
    }

    // pw : 영문자, 숫자, 특수문자로 총 8~15자로 입력
    const pwRegex = document.getElementById('pw');
    regExp=/^[a-z\d!@#$%^&*]{8,15}$/i;
    if(!regExp.test(pwRegex.value)) {
        alert('비밀번호를 조건에 맞춰 다시 입력하세요.');
        pwRegex.value='';
        pwRegex.focus();
        return false;
    }

    // 비밀번호가 일치하는지 확인
    const checkpw = document.getElementById('pwcheck');
    if(pwRegex.value != checkpw.value) {
        alert('비밀번호가 일치하지 않습니다.');
        checkpw.value='';
        checkpw.focus();
        return false;
    }

    // 이름 : 한글로 2글자 이상 입력
    const nmRegex = document.getElementById('name');
    regExp=/^[가-힣]{2,}$/;
    if(!regExp.test(nmRegex.value)){
        alert('이름을 정확히 입력하세요.');
        nmRegex.value='';
        nmRegex.focus();
        return false;
    }

    // 이메일 : 이메일 형식과 맞게 입력
    const emRegex = document.getElementById('email');
    regExp=/^\w+@[a-z]+.\.[a-z]+(\.[a-z]+)?$/;
    if(!regExp.test(emRegex.value)){
        alert('이메일을 정확히 입력하세요.');
        emRegex.value='';
        emRegex.focus();
        return false;
    }
}