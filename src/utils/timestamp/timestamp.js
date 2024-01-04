export function parseToDatetime(v){
    const date = new Date(v);
    const formattedDate = date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    });
    return formattedDate.replace('at',''); 
}

export function parseToDate(v){
    const day = v.slice(8,10)
    const month = v.slice(5,7)
    const year = v.slice(0,4)
    const time= v.slice(11,16)
    return `${day}/${month}/${year} ${time}`; 
}

export function parseInputDate(v){
    const day = v.slice(8,10)
    const month = v.slice(5,7)
    const year = v.slice(0,4)
    const res = `${year}-${month}-${day}`
    return res; 
}
  
export function getCurrentDateTime() {
    const now = new Date();
  
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
  
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    return formattedDateTime;
}

export function getChatDate(v){
    if (v === 'New Message'){
       return v 
    }
    const timestamp = parseToDatetime(v)
    const today = v.slice(0,10) === '2021-06-09' ? 'Today': '' 
    const timestampArr = timestamp.split(' ')
    return `${today} ${timestampArr[0]} ${timestampArr[1]} ${timestampArr[2]}`; 
}
