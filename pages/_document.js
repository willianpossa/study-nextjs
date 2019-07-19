import Document, { Head, Main, NextScript } from 'next/document';

class BaseDocument extends Document {

    render() {

        return (
            <html>
                <Head>
                    <style>{`
                        body {
                            background-color: #069;
                        }
                    `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default BaseDocument;