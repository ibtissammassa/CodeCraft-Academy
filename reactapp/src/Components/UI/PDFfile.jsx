import { PDFViewer, Document, Page, Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import certificateTemplate from '../../assets/Certificate.png';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1%'
    },
    page: {
        width: '100%',
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    certificateImage: {
        width: '100%',
        height: 'auto',
    },
    courseName: {
        position: 'absolute',
        top: '280px',
        left: '230px',
        fontSize: 30,
        color: 'gray',
    },
    date: {
        position: 'absolute',
        bottom: '130px',
        left: '130px'
    },
});

const PDFfile = ({ course }) => {
    const date = new Date().toLocaleDateString(); // Get current date 

    return (
        <div style={styles.container}>
            <PDFViewer width="80%" height={630}>
                <Document>
                    <Page wrap={false} orientation="landscape" style={styles.page}>
                        <Image src={certificateTemplate} style={styles.certificateImage} />
                        <Text style={styles.courseName}>{course.title}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
        
    );
};

export default PDFfile;
