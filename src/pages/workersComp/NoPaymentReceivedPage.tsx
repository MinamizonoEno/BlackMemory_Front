import { Box, Paper, Typography } from "@mui/material";
import { MainPageLayout } from "../../style/MainPageLayout";

export const NoPaymentReceivedPage = () => {
  const styles = {
    paper: {
      padding: "5%",
      margin: "5%",
      marginTop: "0%",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    sectionHeader: {
      fontSize: "2rem",
      color: "#fff",
      fontWeight: "bold",
      margin: "16px 0",
    },
    subSectionHeader: {
      fontSize: "1.5rem",
      color: "#fff",
      fontWeight: "bold",
      margin: "12px 0",
    },
    listItem: {
      fontSize: "1rem",
      color: "#fff",
      marginBottom: "3%",
    },
  };
  return (
    <MainPageLayout>
      <Box sx={{ overflow: "auto", height: "100%" }}>
        <Paper sx={styles.paper}>
          <Typography
            sx={{
              fontSize: "2.5rem",
              color: "#fff",
              fontWeight: "bold",
              margin: "16px 0",
            }}
          >
            賃金や残業代を払ってもらえない
          </Typography>
          <Typography sx={styles.sectionHeader}>まとめ</Typography>
          <Typography sx={styles.listItem}>
            賃金、残業代を未払いとすることは労働基準法に違反する行為です（同法24条、37条）。
            <br />
            労働基準監督署に報告もしくは弁護士に相談するときに必要なものとして給与明細書・タイムカード・源泉徴収票・雇用契約書が上げられます。
            また、日々の労働時間などを記録して提出する必要がある場合があります。
          </Typography>
          <Typography sx={styles.sectionHeader}>
            1. 未払いの給与を回収するための対策
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            未払いの給与を回収するためには、訴訟に備えて十分な証拠を集めることが重要です。
          </Typography>
          <Typography sx={styles.listItem}>
            未払いの給与を回収するための対策
            未払いの給与を回収するためには、訴訟に備えて十分な証拠を集めることが重要です。
            給与明細書、タイムカード、源泉徴収票、雇用契約書など、労働時間を証明する資料を入手しましょう。また、会社が使用しているパソコンのログイン・ログアウトの履歴や、出退勤時間が記載されている業務日報なども有益な証拠となります。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            時効に注意しましょう。
          </Typography>
          <Typography sx={styles.listItem}>
            賃金や残業代の請求権は原則として2年で消滅時効が発生します（ただし、退職金請求権は5年）。請求を考えているならば、期限内に訴訟を提起する必要があります。
          </Typography>
          <Typography sx={styles.listItem}>
            退職してから請求する場合は遅れる可能性があるため、早めの対応が重要です。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            弁護士の協力も考えましょう。
          </Typography>
          <Typography sx={styles.listItem}>
            労基署が会社を監督するには、監督の対象となる会社が、労働基準法などの労働関係の法律に違反している事実がなければなりません。また、せっかく相談しても、対応を後回しにされたり、会社には改善命令ができなかったりなど、取れる解決策には限界があるのも事実です。
          </Typography>
          <Typography sx={styles.listItem}>
            訴訟手続きや交渉を代行してくれます。また、会社との対話や解決においてもスピーディーで効果的なサポートを提供できます。弁護士に相談することで、より具体的で効果的な対策が見えてくるでしょう。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            2. 経営陣を告訴するには
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            労働基準監督署に相談する
          </Typography>
          <Typography sx={styles.listItem}>
            未払いの給与に対処するための手続きの一環として、労働基準監督署に相談することが考えられます。労働基準監督署は、法令違反がないか企業を監督する機関であり、立入検査や改善指導、是正勧告などの権限を有しています。逮捕や送検の権限もありますが、それには一定の悪質性が必要です。
          </Typography>

          <Typography sx={styles.subSectionHeader}>告訴する</Typography>
          <Typography sx={styles.listItem}>
            未払いの給与に対して刑事責任を求める場合、労働基準監督署に告訴することが考えられます。告訴は、犯罪の被害者が捜査機関に対して処罰を求める手続きです。この際、労働基準監督官は警察と同じ権限を持ち、逮捕や送検が可能です。告訴は労働基準監督署に対して行いますが、警察や検察にも告訴できます。なお、告訴による報復行為は法律で禁止されています。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            弁護士に告訴を依頼する
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準監督署が適切な対応をしない場合、弁護士に相談し、告訴を依頼することも一つの手段です。弁護士は専門的な知識を持ち、民事裁判の手続きや労働法に基づいた訴訟を進めることができます。弁護士による訴訟は、効果的でスピーディな解決につながる可能性があります。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            逮捕の可能性について
          </Typography>
          <Typography sx={styles.listItem}>
            給与未払いに対する逮捕は悪質なケースに限られ、法的な要件をクリアする必要があります。悪質性を主張するためには、事前に十分な相談と訴訟準備が必要です。具体的な手続きや法的なアプローチは、弁護士のアドバイスを受けながら進めることが重要です。
          </Typography>
        </Paper>
      </Box>
    </MainPageLayout>
  );
};
