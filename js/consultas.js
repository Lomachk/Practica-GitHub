let personajesData = (async () => {
    const res = await fetch("/dbz.json");
    const data = await res.json();
    return data;
  })();
  
  export default personajesData;