import { Typography } from "antd";

const { Title, Link } = Typography;

export default function Poc() {
  return (
    <>
      <Title level={4}>O Projeto</Title>
      &nbsp;&nbsp;&nbsp;Neste projeto selecionei alguns componentes
      interessantes de entrada de dados para exemplificar como podemos ganhar
      tempo na criação de formularios utilizando o sistema de design&nbsp;
      <Link href="https://ant.design" target="_blank">
        Ant Design
      </Link>
      <br />
      <br />
    </>
  );
}
