const numElement1=document.getElementById('1') as HTMLInputElement
const numElement2=document.getElementById('2') as HTMLInputElement
const btn= document.querySelector('button')!
const numarry:number[]=[]
const stringarr:string[]=[]
type Resultobj={val:number;time: Date}
type NumOrStr=number|string
function sum(num1:NumOrStr,num2:NumOrStr)

{ 


    if(typeof num1 =='string' && typeof num2=='string')
    {
        return num1 +" "+num2
    }
  if(typeof num1 =='number' && typeof num2=='number')
  {
    return num1+num2
  }
 return +num1 + +num2
}
function printresult(resultobj:Resultobj)
{
    console.log(resultobj.val)
}
btn.addEventListener('click',()=>{
     const num1 =numElement1.value
     const num2= numElement2.value
     const numresult = sum(+num1, +num2);
     numarry.push(numresult as number)
     const stringresult=sum(num1,num2)
     stringarr.push(stringresult as string)
     console.log(numresult)
     printresult({val:numresult as number , time: new Date()})
})
const p1=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve("i am good")
    },2000)
   
})
p1.then((result)=>{
    console.log(result.split(' '))
})