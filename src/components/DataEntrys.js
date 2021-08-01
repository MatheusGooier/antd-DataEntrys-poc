import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Select,
  Divider,
  DatePicker,
  TimePicker,
  Radio,
  TreeSelect,
  Slider,
  Switch,
  Upload,
  message,
  Rate,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InboxOutlined,
} from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TreeNode } = TreeSelect;
const { Dragger } = Upload;
const { Title } = Typography;

const uploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const radioOptions = ["Opção 1", "Opção 2", "Opção 3"];

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".org">.org</Option>
    <Option value=".com.br">.com.br</Option>
    <Option value=".net">.net</Option>
  </Select>
);

const children = [];
const options = [
  "Seleção multipla",
  "Com dropdown e pesquisa",
  "Matheus Alexandre de Souza Cometti",
];
options.forEach(function (option, index) {
  children.push(<Option key={option}>{option}</Option>);
});

function sliderFormatter(value) {
  return `${value} - Seleção de valor`;
}

export default function DataEntrys() {
  const [value, setValue] = useState(undefined);
  const onChange = () => {
    setValue(value);
  };
  return (
    <div>
      <Title level={4}>Demonstração dos components de entrada de dados.</Title>
      <Divider orientation="left">Inputs</Divider>
      <Row>
        <Col span={3}>
          Básico:
          <br />
          <Input placeholder="Texto simples" />
        </Col>
        <Col span={3} offset={1}>
          Pesquisa:
          <br />
          <Search placeholder="Busque algo" style={{ width: 200 }} />
        </Col>
        <Col span={5} offset={0}>
          Prédefinição de conteúdo
          <br />
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            defaultValue="Seu-site"
          />
        </Col>
        <Col span={4} offset={1}>
          Senha:
          <br />
          <Input.Password
            placeholder="Informe uma senha forte"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          ></Input.Password>
        </Col>
      </Row>
      <Divider orientation="left">DatePicker</Divider>
      <Row>
        <Col span={3}>
          Simples:
          <br />
          <DatePicker style={{ width: 170 }} placeholder="Escolha uma data" />
        </Col>
        <Col span={5}>
          Intervalo de datas:
          <br />
          <RangePicker placeholder={["Inicial", "Final"]} />
        </Col>
        <Col span={3}>
          Horário:
          <br />
          <TimePicker placeholder="00:00:00" format="HH:mm:ss" />
        </Col>
      </Row>
      <Divider orientation="left">Radio</Divider>
      <Row>
        <Col span={5}>
          Simples:
          <br />
          <Radio.Group options={radioOptions}></Radio.Group>
        </Col>
        <Col span={5}>
          Estilo botões:
          <br />
          <Radio.Group
            options={radioOptions}
            optionType="button"
            buttonStyle="solid"
          ></Radio.Group>
        </Col>
      </Row>
      <Divider orientation="left">Select</Divider>
      <Row>
        {" "}
        <Col span={3}>
          Simples:
          <br />
          <Select defaultValue="m" style={{ width: 140 }}>
            <Option value="m">Matheus</Option>
            <Option value="l">Lucas</Option>
            <Option value="i" disabled>
              Isis
            </Option>
            <Option value="j">Julia</Option>
          </Select>
        </Col>
        <Col span={4}>
          Estilo árvore:
          <br />
          <TreeSelect
            showSearch
            style={{ width: "100%" }}
            value={value}
            dropdownStyle={{ overflow: "auto" }}
            placeholder="Escolha uma opção"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
          >
            <TreeNode value="parent 1" title="Opção 1">
              <TreeNode value="parent 1-0" title="Opção 1.1">
                <TreeNode value="leaf1" title="Opção 1.1.1" />
                <TreeNode value="leaf2" title="Opção 1.1.2" />
              </TreeNode>
              <TreeNode value="parent 1-1" title="Opção 1.2">
                <TreeNode
                  value="m"
                  title={<b style={{ color: "#08c" }}>Matheus Cometti</b>}
                />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
        </Col>
        <Col span={5} offset={1}>
          Seleção multipla:
          <br />
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Seleção multipla"
            defaultValue={["Com dropdown e pesquisa"]}
          >
            {children}
          </Select>
        </Col>
      </Row>
      <Divider orientation="left">Outros exemplos</Divider>
      <Row>
        <Col span={4}>
          Seleção de valor:
          <br />
          <Slider tipFormatter={sliderFormatter} defaultValue={30} />
        </Col>
        <Col span={8} offset={1}>
          Upload de arquivo:
          <br />
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Clique ou arraste aqui para carregar um arquivo
            </p>
          </Dragger>
        </Col>
        <Col span={4} offset={1}>
          Switch:
          <br />
          <Switch
            checkedChildren="Ativo"
            unCheckedChildren="Desativado"
            defaultChecked
          />
        </Col>
        <Col span={4}>
          Avaliação:
          <br />
          <Rate allowHalf defaultValue={2.5} />
        </Col>
      </Row>
    </div>
  );
}
