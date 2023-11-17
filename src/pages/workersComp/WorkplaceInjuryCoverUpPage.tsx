import { Box, Paper, Typography } from "@mui/material";
import { MainPageLayout } from "../../style/MainPageLayout";

export const WorkplaceInjuryCoverUpPage = () => {
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
            労災隠しが行われている
          </Typography>
          <Typography sx={styles.sectionHeader}>まとめ</Typography>
          <Typography sx={styles.listItem}>
            労災隠しは、企業が労災事故の発生を秘匿するために行う行為を指します。
            <br />
            労働基準監督署に報告もしくは弁護士に相談するときに必要なものとしてタイムカード・雇用契約書・診断書等が上げられます。
          </Typography>
          <Typography sx={styles.sectionHeader}>1. 労災隠しとは</Typography>
          <Typography sx={styles.listItem}>
            労災隠しは、企業が労災事故の発生を秘匿するために行う行為を指します。
          </Typography>

          <Typography sx={styles.subSectionHeader}>労災隠しの例</Typography>
          <Typography sx={styles.listItem}>
            故意に労働者死傷病報告書を提出しない、虚偽の内容を含めて労働者死傷病報告書を提出するなどの行為が労災隠しの例です。
            このような行動は労働基準監督署による災害原因の特定や究明を阻害し、適切な対策を講じることを難しくし、被災労働者の治療や補償の受け取りにも影響を与えます。
          </Typography>

          <Typography sx={styles.listItem}>
            <i>
              労災隠しは労働安全衛生法に違反する不法な行為であり、これに対して事業者は50万円の罰金が科されることになります（労働安全衛生法120条5号）。
            </i>
          </Typography>

          <Typography sx={styles.sectionHeader}>
            2. 企業が労災隠しを行う5つの理由
          </Typography>
          <Typography sx={styles.listItem}>
            <b> 企業のイメージ低下を避けるため</b>
            <br />
            労災事故の公表は企業のイメージを損なう可能性があり、取引先からの契約解除や顧客離れを招くことがあります。このため、企業は労災隠しを行うことがあります。また、現場の管理不足が昇進の障害となることから、労働者同士が労災事故を隠すケースも見られます。
          </Typography>

          <Typography sx={styles.listItem}>
            <b> 労災保険料の上昇を回避するため</b>
            <br />
            労災事故で労災保険を利用すると、事業主の負担する労災保険料が増加します。ただし、労災保険はメリット制度が採用されており、20人以下の事業所では労災保険の利用によって保険料が上昇することはありません。経営者の中には「労災保険を使えば常に労災保険料が上がる」と誤解しているケースもあります。
          </Typography>

          <Typography sx={styles.listItem}>
            <b> 労働基準監督署の調査を回避するため</b>
            <br />
            労災事故が発生し、労働基準監督署に申告すると、調査が行われます。他の違法行為が発覚する可能性があるため、企業は不法就労や違法派遣などの発覚を恐れて労災隠しを行うことがあります。
          </Typography>

          <Typography sx={styles.listItem}>
            <b> 労災保険の手続きが煩雑であるため</b>
            <br />
            労災事故が発生した場合、大企業では対応部署が存在し手続きがマニュアル化されています。しかし、中小企業では手続きが煩雑であることから、その手間を省くために労災隠しを行うことがあります。
          </Typography>

          <Typography sx={styles.listItem}>
            <b> 労災保険に未加入であるため</b>
            <br />
            雇用している労働者がいる企業は、労働者を労災保険に加入させることが法的に義務付けられています。しかし、これに違反している企業は、労災隠しを行うことがあります。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            3. 熱中症の労災隠しに遭遇した場合の対処法
          </Typography>

          <Typography sx={styles.listItem}>
            <b> 労働基準監督署に相談</b>
            <br />
            労働基準監督署は、企業が法令に違反していないか監督する機関です。労災隠しは労働安全衛生法に反する違法行為であり、労働基準監督署に相談することで、指導や是正の措置を期待できます。また、これにより企業が労災手続きを行う可能性も高まります。
          </Typography>

          <Typography sx={styles.listItem}>
            <b> 弁護士に相談</b>
            <br />
            労働基準監督署は、主に違反の取り締まりに従事します。したがって、労働者の権利回復には個別に交渉や訴訟を進める必要があります。弁護士は、被害者の代理人として企業と交渉し、労働者の権利を主張する役割を果たすことができます。個人が単独での対応が難しい場合は、弁護士に相談することが重要です。
          </Typography>
        </Paper>
      </Box>
    </MainPageLayout>
  );
};
