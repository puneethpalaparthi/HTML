 <script>
            function hello()
            {
                var name=prompt("enter a name");
                var age=prompt("enter a age");
                document.getElementById("qq").textContent=name;
                document.getElementById("aa").textContent=age;
                if(age>=18){
                    document.getElementById("pp").textContent="eligibile for vote";
                }
                else{
                    document.getElementById("pp").textContent=" not eligibile for vote";
                }
            }
        </script>
