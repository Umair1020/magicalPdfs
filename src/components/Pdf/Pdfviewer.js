import React from 'react';
import { Viewer, Worker, PageChangeEvent } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, SidebarTab } from '@react-pdf-viewer/default-layout';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';


const Pdfviewer = () => {
    
    
      const pageNavigationPluginInstance = pageNavigationPlugin();
    const { CurrentPageInput, GoToFirstPageButton, GoToLastPageButton, GoToNextPageButton, GoToPreviousPage } =
        pageNavigationPluginInstance;

    return (
        <div>
            {/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>

                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            backgroundColor: '#eeeeee',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '4px',
                        }}
                    >
                       
                    </div>
                    <div
                        style={{
                            flex: 1,
                            overflow: 'hidden',
                        }}
                    >

                        <Viewer fileUrl="/HR.pdf" plugins={[defaultLayoutPluginInstance]} />
                    </div>
                </div>
            </Worker> */}
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
            <div
        style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}
    >
        <div
            style={{
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'center',
                padding: '4px',
            }}
        >
            <div style={{ padding: '0px 2px' }}>
                <GoToFirstPageButton />
            </div>
            <div style={{ padding: '0px 2px' }}>
                <GoToPreviousPage />
            </div>
            <div style={{ padding: '0px 2px' }}>
                <CurrentPageInput />
            </div>
            <div style={{ padding: '0px 2px' }}>
                <GoToNextPageButton />
            </div>
            <div style={{ padding: '0px 2px' }}>
                <GoToLastPageButton />
            </div>
        </div>
        <div
            style={{
                flex: 1,
                overflow: 'hidden',
            }}
        >
            <Viewer fileUrl="/HR.pdf" plugins={[pageNavigationPluginInstance]} />
        </div>
    </div>
    </Worker>
        </div>
    );
};

export default Pdfviewer;
