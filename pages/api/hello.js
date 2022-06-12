// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log( 'req', req.body )
  const {FirstName,LastName,Email} = req.body
   res.status(200).json({
      success: true,
      status: 200,
      message: `${FirstName} your account is ready, and waiting for confirmation, we sent you an email on ${Email} click the verification link to start your first campaign.`,
      data: req.body,
   })
}
