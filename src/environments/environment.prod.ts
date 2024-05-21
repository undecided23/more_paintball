/**
 * The environment files in angular are NOT meant to be used for sensitive information.
 */
export const environment = {
    production: true,
    emailjs: {
        // TODO: Currently production service for emailjs is not set up.
        serviceId: 'service_ze2r1vp',
        templateId: 'template_ym7vfaw',
        publicKey: 'Lnl4U_s5mibknzcBQ',
        toEmail: 'more@paintballkalmar.se'
    }
};