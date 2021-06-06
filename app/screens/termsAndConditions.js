import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
// for responsive design 
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';


// Page that will describe the terms and conditions of the user accepting 
// financial aid from CFGI, this is very long
export const termsAndConditions = ({navigation}) => {
    return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.titleText}>Terms and Conditions</Text>
            {/* The actual terms and conditions */}
            <Text style={styles.mainText}>
                This document outlines the Terms and Conditions for scholarships and awards administered by  Community for Global Innovation (CFGI). All scholarships and awards will be referred to as ‘scholarships’ herein. 
                You must read these Terms and Conditions in full. In accepting a scholarship from CFGI, it is understood that you have read and agreed to comply with these Terms and Conditions. 
                Please note, if you are under 18 years of age, your parent or guardian must read and consent to these terms and conditions on your behalf.
            </Text>
            <Text style={styles.header}>Accepting your scholarship</Text> 
            <Text style={styles.mainText}>
                Successful scholarship applicants will receive an email detailing the scholarship benefits and payment timing. 
                If you do not wish to accept a scholarship that you have been offered, you should advise us immediately in writing.
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                Your scholarships details may be passed on to your school, donors or partner organization (where applicable). 
                If you do not wish for your details to be passed on, you must advise CFGI in writing by email to admin@cfgi.world.
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                CFGI reserves the right to change the title of the scholarship awarded depending on funding contributions from external parties. 
                If the funding level or eligibility changes, CFGI will advise the recipient before changing any details but name changes can occur without notice.
            </Text>
            <Text style={styles.header}>How your scholarship is paid</Text>
            <Text style={styles.mainText}>
                The method of payment will be detailed in your email of offer. In most cases, scholarship payments for school students are made directly via CFGI or students will receive payment directly.
            </Text>
                <View style={styles.break}></View>
            <Text style={styles.mainText}>
                At the end of each academic year for the duration of your scholarship you may be asked to provide a report detailing how the scholarship funds have been spent. 
                If required, it is the responsibility of the scholarship recipient to provide this report to CFGI by the specified time. 
                Failure to return reports by the specified time may result in future payments being withheld.
            </Text>
            <Text style={styles.header}>Elgibility requirements</Text> 
            <Text style={styles.mainText}>
                All scholarships are awarded on the basis that you will maintain an enrolled status in a higher education as an international student. 
                Your scholarship may be terminated if your enrollment status changes.
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                To retain your scholarship you must also:
            </Text>
            <View style={styles.bulletSpace}></View>
            <View style={styles.bullets}>
                <Text style={{fontSize: 16}}>{'\u2B24'}  at a minimum, maintain your attendance and academic performance as at the time of your application, and immediately notify CFGI of any extenuating circumstances that may prevent you doing so;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  adhere to the academic and administrative policies of the school and/or education institution at which you are enrolled;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  maintain your immigration status and advise CFGI within fourteen days if you change your residency status;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  meet any additional criteria outlines in your letter of offer; and</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  provide confirmation of your circumstances during the term of the scholarship if requested by CFGI.</Text>
            </View>
            <View style={styles.bulletSpace}></View>
            <Text style={styles.header}>Scholarship termination</Text> 
            <Text style={styles.mainText}>
                CFGI may terminate your scholarship if you have:
            </Text>
            <View style={styles.bulletSpace}></View>
            <View style={styles.bullets}>
                <Text style={{fontSize: 16}}>{'\u2B24'}  discontinued from your course of study or have inactive enrolment;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  failed to meet the eligibility requirements of your scholarship;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  failed to meet the scholarships terms and conditions;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  failed to maintain satisfactory academic progress;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  been suspended or excluded from school or your course of study;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  been made an incorrect scholarship offer as determined by CFGI at its sole discretion; and/or</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  have provided incorrect, false or misleading information or withheld relevant information on your scholarship application or after receiving a scholarship offer.</Text>
            </View>
            <View style={styles.bulletSpace}></View>
            <Text style={styles.mainText}>
                If your scholarship is terminated, you will not receive any further payments. You may be required to repay some or all of your scholarship.
            </Text>
            <Text style={styles.header}>Repayment of your scholarship</Text>
            <Text style={styles.mainText}>
                You will need to repay the scholarship if:
            </Text>
            <View style={styles.bulletSpace}></View>
            <View style={styles.bullets}>
                <Text style={{fontSize: 16}}>{'\u2B24'}  the payment is made to you in error or you have been overpaid;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  your scholarship is terminated;</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  you do not meet the conditions of the scholarship or are deemed to be ineligible for the scholarship; and/or</Text>
                <Text style={{fontSize: 16}}>{'\u2B24'}  you have been made a scholarship offer in error.</Text>
            </View>
            <View style={styles.bulletSpace}></View>
            <Text style={styles.mainText}>
                In the event that you are required to repay your scholarship, you must do so within 4 weeks of receiving the notification.
            </Text>
            <Text style={styles.header}>How does my scholarship affect my tax payments</Text>
            <Text style={styles.mainText}>
                Community for Global Innovation cannot provide you with advice on taxation. 
                The information provided here is of a general nature only and does not take into account your individual circumstances. 
                Please seek the guidance of a tax representative. 
                Community for Global Innovation is not liable for the payment of any tax or any other obligations you may incur as a result of accepting a scholarship from us. 
                You must seek appropriate financial advice prior to accepting a scholarship.
            </Text>
            <Text style={styles.header}>Publicity and promotion</Text>
            <Text style={styles.mainText}>
                If you are offered a scholarship, your details including name, school, photograph, video and scholarship awarded may be passed on to media and used by CFGI and/or partner organizations for promotional purposes, 
                including but not limited to CFGI’s website, social media channels, print and electronic media. 
                If you do not wish for your details to be passed on to the media or used for promotional purposes, you must notify CFGI in writing.
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                If you attend events held by CFGI, photos and videos of you at the event (along with your name, school and scholarship), may be used for promotional purposes by CFGI and/or our partner organizations, 
                including but not limited to CFGI website, social media channels, print and electronic media.
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                It is agreed that the use of these photographs and videos shall in no way be used in any other forum other than official CFGI business. 
                The scholarship recipient also waives the right to inspect or approve the finished product, the advertising copy or other matter that may be used in connection therewith or the use to which it may be applied. 
                If you do not wish for photographs and videos of you to be used in this way, you must notify CFGI in writing.
            </Text>
            <Text style={styles.header}>Media consent</Text>
            <Text style={styles.mainText}>
                Consent is sought for use of photographic/video/audio recording made of the student during CFGI events. 
                Permission is being requested to publish, reproduce and communicate images and/or recording of the student on:
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                This consent is for an indefinite period of time. Consent is also sought to publish the name and school of the student. 
                We may also provide the media with details of your scholarship either before or after events. 
                With reference to the above, the student grants permission to use, reproduce, distribute, communicate to the public, publish, publicly display, modify, translate, adapt, upload, download in any form or manner and/or permission to incorporate this material into other materials or works in any format or medium for any non-commercial purpose and the right to sublicense those rights for noncommercial purpose. 
                The student can withdraw their consent at any time but must do so in writing or by email to admin@cfgi.org.
            </Text>
            <Text style={styles.header}>Liability waiver</Text>
            <Text style={styles.mainText}>
                In accepting a scholarship from CFGI you agree to WAIVE, RELEASE, AND DISCHARGE Community of Global Innovation, 
                its officers, associates and partner organisations from any and all liability, including but not limited to, 
                any liability arising from the negligence or fault of the entities or persons released, for death, disability, personal injury, property damage, property theft, or actions of any kind which may occur to you during or after the scholarship period, including during or after any travel undertaken as part of the scholarship.
            </Text>
            <Text style={styles.header}>Keeping your contact details up to date</Text>
            <Text style={styles.mainText}>
                All correspondence during the application process will be sent to the applicant's residential address or primary email address submitted in the scholarship application form.   
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                It is the responsibility of the scholarship recipient to inform CFGI of any changes to their email, postal or residential address. 
                It is also the responsibility of the scholarship recipient to inform CFGI if they change their place of study, if you stop being an international student, or if you become a U.S. citizen, during the course of their scholarship.
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                Please note, if you are under 18 years of age, it is understood that your parent or guardian has read and agreed to the Scholarship Terms and Conditions on your behalf.
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                CFGI reserves the right to amend these Terms and Conditions for commencing and continuing scholarship holders.
            </Text>
            <View style={styles.break}></View>
            <Text style={styles.mainText}>
                Any questions about these Terms and Conditions should be directed to admin@cfgi.world.
            </Text>
            <View style={styles.endBreak}></View>
        </View>
    </ScrollView>
    );
  }


// Stylesheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F5F9',
      justifyContent: 'center',
    },

    // Defines styling for the back button
    backButtonContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-start',
        paddingLeft: wp('10%')
    },
    
    // Defines styling for all section headers
    header: {
        fontSize: 20,
        textAlign: 'left', 
        paddingLeft: wp('13%'),
        paddingRight: wp('13%'),
        paddingTop: hp('2.2%'),
        color: '#3F3356',
        fontWeight: 'bold'
    },

    // Defines text for uploading documents
    mainText: {
        textAlign: 'center',
        fontSize: 16,
        paddingLeft: wp('13%'),
        paddingRight: wp('13%'),
        textAlign: 'left'
    }, 

    titleText: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: 'bold',
        width: wp('90%'),
        paddingLeft: wp('10%'), 
        paddingTop: hp('1%'), 
        paddingBottom: hp('1%'), 
        color: '#3F3356'
    },

    break: {
        padding: wp('1%')
    },

    endBreak: {
        padding: wp('5%')
    },

    bullets: {
        paddingLeft: wp('16%'),
        paddingRight: wp('13%')
    },

    bulletSpace: {
        paddingTop: hp('1%')
    }
});
