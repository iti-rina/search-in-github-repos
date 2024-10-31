import { FC, useEffect } from 'react';
import { Modal, Form, Input, InputNumber } from 'antd';
import githubReposStore from '../../../app/model/githubReposStore';

type EditRepositoryModalProps = {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
  repositoryId: number
}

const EditRepositoryModal:FC<EditRepositoryModalProps> = ({isOpen, onOk, onCancel, repositoryId}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    const repository = githubReposStore.getRepositoryById(repositoryId);

    if (repository) {
      form.setFieldsValue({
        repositoryName: repository.name,
        repositoryOwner: repository.owner_login,
        url: repository.html_url,
        stars: repository.stargazers_count
      });
    }
  }, [repositoryId, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        githubReposStore.updateRepository(repositoryId, {
          name: values.repositoryName,
          html_url: values.url,
          stargazers_count: values.stars,
          owner_login: values.repositoryOwner
        });
        onOk();
      })
      .catch((info) => {
        console.log('Error:', info);
      });
  };

  return (
    <Modal
      title='Edit repository info'
      open={isOpen}
      onOk={handleOk}
      okText='Update repository'
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout='vertical'
      >
        <Form.Item
          label='Repository name'
          name='repositoryName'
          rules={[{ required: true, message: 'Enter repository name, please' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Repository owner'
          name='repositoryOwner'
          rules={[{ required: true, message: 'Enter repository owner, please' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='URL'
          name='url'
          rules={[{ type: 'url', message: 'Enter correct URL, please' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Stars count'
          name='stars'
        >
          <InputNumber min={0} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditRepositoryModal;