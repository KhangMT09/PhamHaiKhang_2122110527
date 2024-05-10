function CheckForm()
{
    try{
        //ktr tên
        const hoten = document.getElementById("hoten");
        if(hoten.value.length==0)
        {
            hoten.focus();
            throw "không để trống"
        }
        //mã sinh viên
         const mssv = document.getelementbyid("mssv");
         const ktrmasv= /^21\d{8}$/;
         if(ktrmasv.test(mssv.value)==false){
             mssv.focus();
             throw "mã sinh viên không hợp lệ"
         }


        //điện thoại
         const dienthoai = document.getelementbyid("dienthoai");
         const ktrdienthoai= /(0[3|5|7|8|9])+([0-9]{8})\b/g;
         if(ktrdienthoai.test(dienthoai.value)==false){
             dienthoai.focus();
             throw "số điện thoại không hợp lệ"
         }

         //email
         const email = document.getelementbyid("email");
         const ktremail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
         if(ktrdemail.test(email.value)==false){
             email.focus();
             throw "email không hợp lệ"
         }
         
        return true;
    }
    catch (error){
        console.log(error);
    }
    return false;
}