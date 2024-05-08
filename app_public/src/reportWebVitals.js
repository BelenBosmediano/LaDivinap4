const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry); //el tiempo que mide 
      getLCP(onPerfEntry);//el tiempo que mide en cargar la pagina
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
