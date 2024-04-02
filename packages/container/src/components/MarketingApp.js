import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';


const MarketingApp = () => {
    const marketingRef = useRef(null);

    useEffect(() => {
      mount && mount(marketingRef.current);
    }, [])
    

    return <div ref={marketingRef} />
}

export default MarketingApp;