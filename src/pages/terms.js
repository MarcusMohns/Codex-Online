import styled from "styled-components";
import COLORS from "../components";

export const Header = styled.h1`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  margin-top: 10%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.fadedBackground};
  max-width: 100vw;
  width: auto;
  margin-top: 10%;
  font-family: sans-serif;
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  color: white;
  padding: 3rem;
  h2 {
    align-self: center;
  }
  p {
    margin-left: 20px;
    margin-bottom: 1px;
  }
  .sub-title {
    font-size: 1.2rem;
    margin: 20px;
    margin-left: 0px;
    text-transform: uppercase;
  }

  @media screen and (min-width: 600px) {
    padding: 2rem 15rem;
  }
`;

const Terms = () => {
  return (
    <>
      <Header>TERMS AND CONDITIONS</Header>
      <Main>
        <p className="sub-title">
          1.<b> Introduction</b>
        </p>
        <p>
          Welcome to <b>Codex</b> (“Codex”,"Company", “we”, “our”, “us”)!
        </p>
        <p>
          These Terms of Service (“Terms”, “Terms of Service”) govern your use
          of our website located at <b>Codex.se</b> (together or individually
          “Service”) operated by <b>Codex</b>.
        </p>
        <p>
          Our Privacy Policy also governs your use of our Service and explains
          how we collect, safeguard and disclose information that results from
          your use of our web pages.
        </p>
        <p>
          Your agreement with us includes these Terms and our Privacy Policy
          (“Agreements”). You acknowledge that you have read and understood
          Agreements, and agree to be bound of them.
        </p>
        <p>
          If you do not agree with (or cannot comply with) Agreements, then you
          may not use the Service, but please let us know by emailing at{" "}
          <b>temp@lol.com</b> so we can try to find a solution. These Terms
          apply to all visitors, users and others who wish to access or use
          Service.
        </p>
        <p className="sub-title">
          2. <b>Terms</b>
        </p>
        <p>
          The materials contained in this website are protected by applicable
          copyright and trademark law. World of Warcraft, Warcraft and Blizzard
          Entertainment are trademarks or registered trademarks of Blizzard
          Entertainment, Inc. in the U.S. and/or other countries.
        </p>

        <p className="sub-title">
          3. <b>Prohibited Uses</b>
        </p>
        <p>
          You may use Service only for lawful purposes and in accordance with
          Terms. You agree not to use Service:
        </p>
        <p>
          0.1. In any way that violates any applicable national or international
          law or regulation.
        </p>
        <p>
          0.2. For the purpose of exploiting, harming, or attempting to exploit
          or harm minors in any way by exposing them to inappropriate content or
          otherwise.
        </p>
        <p>
          0.3. To transmit, or procure the sending of, any advertising or
          promotional material, including any “junk mail”, “chain letter,”
          “spam,” or any other similar solicitation.
        </p>
        <p>
          0.4. To impersonate or attempt to impersonate Codex, a Codex employee,
          another user, or any other person or entity.
        </p>
        <p>
          0.5. In any way that infringes upon the rights of others, or in any
          way is illegal, threatening, fraudulent, or harmful, or in connection
          with any unlawful, illegal, fraudulent, or harmful purpose or
          activity.
        </p>
        <p>
          0.6. To engage in any other conduct that restricts or inhibits
          anyone’s use or enjoyment of Service, or which, as determined by us,
          may harm or offend Codex or users of Service or expose them to
          liability.
        </p>
        <p>Additionally, you agree not to:</p>
        <p>
          0.1. Use Service in any manner that could disable, overburden, damage,
          or impair Service or interfere with any other party’s use of Service,
          including their ability to engage in real time activities through
          Service.
        </p>
        <p>
          0.2. Use any robot, spider, or other automatic device, process, or
          means to access Service for any purpose, including monitoring or
          copying any of the material on Service.
        </p>
        <p>
          0.3. Use any manual process to monitor or copy any of the material on
          Service or for any other unauthorized purpose without our prior
          written consent.
        </p>
        <p>
          0.4. Use any device, software, or routine that interferes with the
          proper working of Service.
        </p>
        <p>
          0.5. Introduce any viruses, trojan horses, worms, logic bombs, or
          other material which is malicious or technologically harmful.
        </p>
        <p>
          0.6. Attempt to gain unauthorized access to, interfere with, damage,
          or disrupt any parts of Service, the server on which Service is
          stored, or any server, computer, or database connected to Service.
        </p>
        <p>
          0.7. Attack Service via a denial-of-service attack or a distributed
          denial-of-service attack.
        </p>
        <p>0.8. Take any action that may damage or falsify Codex rating.</p>
        <p>
          0.9. Otherwise attempt to interfere with the proper working of
          Service.
        </p>
        <p className="sub-title">
          4. <b>Analytics</b>
        </p>
        <p>
          We may use third-party Service Providers to monitor and analyze the
          use of our Service.
        </p>
        <p className="sub-title">
          5. <b>Accuracy of materials</b>
        </p>
        <p>
          5. ACCURACY OF MATERIALS The materials appearing on Codex's website
          could include technical, typographical, or photographic errors. Codex
          does not warrant that any of the materials on its website are
          accurate, complete or current. Codex may make changes to the materials
          contained on its website at any time without notice. However Codex
          does not make any commitment to update the materials.
        </p>
        <p className="sub-title">
          6. <b>Copyright Policy</b>
        </p>
        <p>
          We respect the intellectual property rights of others. It is our
          policy to respond to any claim that Content posted on Service
          infringes on the copyright or other intellectual property rights
          (“Infringement”) of any person or entity.
        </p>
        <p>
          If you are a copyright owner, or authorized on behalf of one, and you
          believe that the copyrighted work has been copied in a way that
          constitutes copyright infringement, please submit your claim via email
          to temp@lol.com, with the subject line: “Copyright Infringement” and
          include in your claim a detailed description of the alleged
          Infringement as detailed below, under “DMCA Notice and Procedure for
          Copyright Infringement Claims”
        </p>
        <p>
          You may be held accountable for damages (including costs and
          attorneys’ fees) for misrepresentation or bad-faith claims on the
          infringement of any Content found on and/or through Service on your
          copyright.
        </p>
        <p className="sub-title">
          7. <b>DMCA Notice and Procedure for Copyright Infringement Claims</b>
        </p>
        <p>
          You may submit a notification pursuant to the Digital Millennium
          Copyright Act (DMCA) by providing our Copyright Agent with the
          following information in writing (see 17 U.S.C 512(c)(3) for further
          detail):
        </p>
        <p>
          0.1. an electronic or physical signature of the person authorized to
          act on behalf of the owner of the copyright’s interest;
        </p>
        <p>
          0.2. a description of the copyrighted work that you claim has been
          infringed, including the URL (i.e., web page address) of the location
          where the copyrighted work exists or a copy of the copyrighted work;
        </p>
        <p>
          0.3. identification of the URL or other specific location on Service
          where the material that you claim is infringing is located;
        </p>
        <p>0.4. your address, telephone number, and email address;</p>
        <p>
          0.5. a statement by you that you have a good faith belief that the
          disputed use is not authorized by the copyright owner, its agent, or
          the law;
        </p>
        <p>
          0.6. a statement by you, made under penalty of perjury, that the above
          information in your notice is accurate and that you are the copyright
          owner or authorized to act on the copyright owner’s behalf.
        </p>
        <p>You can contact our Copyright Agent via email at temp@lol.com.</p>
        <p className="sub-title">
          8. <b>Error Reporting and Feedback</b>
        </p>
        <p>
          You may provide us either directly at temp@lol.com or via third party
          sites and tools with information and feedback concerning errors,
          suggestions for improvements, ideas, problems, complaints, and other
          matters related to our Service (“Feedback”). You acknowledge and agree
          that: (i) you shall not retain, acquire or assert any intellectual
          property right or other right, title or interest in or to the
          Feedback; (ii) Codex may have development ideas similar to the
          Feedback; (iii) Feedback does not contain confidential information or
          proprietary information from you or any third party; and (iv) Codex is
          not under any obligation of confidentiality with respect to the
          Feedback. In the event the transfer of the ownership to the Feedback
          is not possible due to applicable mandatory laws, you grant Codex and
          its affiliates an exclusive, transferable, irrevocable,
          free-of-charge, sub-licensable, unlimited and perpetual right to use
          (including copy, modify, create derivative works, publish, distribute
          and commercialize) Feedback in any manner and for any purpose.
        </p>

        <p>
          YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR
          LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR
          ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON
          ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH
          THIRD PARTY WEB SITES OR SERVICES.
        </p>
        <p>
          WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
          POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
        </p>
        <p className="sub-title">
          9. <b>Disclaimer Of Warranty</b>
        </p>
        <p>
          THESE SERVICES ARE PROVIDED BY CODEX ON AN “AS IS” AND “AS AVAILABLE”
          BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE
          INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY
          AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES
          OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
        </p>
        <p>
          NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY
          WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
          RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
          WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED
          WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT,
          OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE
          ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE
          CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE
          FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR
          ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE
          MEET YOUR NEEDS OR EXPECTATIONS.
        </p>
        <p>
          COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
          OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY
          WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
          PARTICULAR PURPOSE.
        </p>
        <p>
          THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED
          OR LIMITED UNDER APPLICABLE LAW.
        </p>
        <p className="sub-title">
          10. <b>Limitation Of Liability</b>
        </p>
        <p>
          EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
          DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE,
          SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES
          (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF
          LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER
          OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION
          OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF
          OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY
          CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS
          AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL
          LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN
          PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS
          PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY,
          IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR
          SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR
          PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION
          OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR
          LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
        </p>

        <p className="sub-title">
          11. <b>Governing Law</b>
        </p>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of Sweden, which governing law applies to agreement without
          regard to its conflict of law provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights. If any provision of these
          Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our Service and
          supersede and replace any prior agreements we might have had between
          us regarding Service.
        </p>
        <p className="sub-title">
          12. <b>Changes To Service</b>
        </p>
        <p>
          We reserve the right to withdraw or amend our Service, and any service
          or material we provide via Service, in our sole discretion without
          notice. We will not be liable if for any reason all or any part of
          Service is unavailable at any time or for any period. From time to
          time, we may restrict access to some parts of Service, or the entire
          Service, to users, including registered users.
        </p>
        <p className="sub-title">
          13. <b>Amendments To Terms</b>
        </p>
        <p>
          We may amend Terms at any time by posting the amended terms on this
          site. It is your responsibility to review these Terms periodically.
        </p>
        <p>
          Your continued use of the Platform following the posting of revised
          Terms means that you accept and agree to the changes. You are expected
          to check this page frequently so you are aware of any changes, as they
          are binding on you.
        </p>
        <p>
          By continuing to access or use our Service after any revisions become
          effective, you agree to be bound by the revised terms. If you do not
          agree to the new terms, you are no longer authorized to use Service.
        </p>

        <p className="sub-title">
          14. <b>Acknowledgement</b>
        </p>
        <p>
          BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
          THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY
          THEM.
        </p>
        <p className="sub-title">
          15. <b>Contact Us</b>
        </p>
        <p>
          Please send your feedback, comments, requests for technical support by
          email: <b>temp@lol.com</b>.
        </p>
        <br />
        <p>Last updated: 2022-03-20</p>
      </Main>
    </>
  );
};
export default Terms;
