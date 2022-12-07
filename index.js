const mark = document.getElementById('mark')
const count = document.getElementById('count')
const notifyBox1 =document.getElementById('notify-box1')
const notifyBox2 =document.getElementById('notify-box2')
const notifyBox3 =document.getElementById('notify-box3')
const faCircle1 = document.getElementById('fa-circle1')
const faCircle2 = document.getElementById('fa-circle2')
const faCircle3 = document.getElementById('fa-circle3')

mark.addEventListener("click", function() {
    count.textContent = "0"
    notifyBox1.style.backgroundColor = "inherit"
    notifyBox2.style.backgroundColor = "inherit"
    notifyBox3.style.backgroundColor = "inherit"
    faCircle1.remove()
    faCircle2.remove()
    faCircle3.remove()
})