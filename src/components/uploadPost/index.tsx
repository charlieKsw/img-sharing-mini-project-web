import React, { useState } from 'react';
import { Form as AntdForm, Input, message, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Button } from '..';

//Type
import { ButtonHtmlType } from '../button/types';

interface UploadPostProps {
	dataList?: any;
	setAddPost: any;
	submitBtnName: any;
	submitBtnType: ButtonHtmlType;
	onFinish: any;
	onFinishFailed: any;
	isCancel: any;
	setIsCancel: any;
}

export const UploadPostForm = (props: UploadPostProps) => {
	const { setAddPost, isCancel, setIsCancel, submitBtnName, submitBtnType, onFinish, onFinishFailed } = props;
	const [ form ] = AntdForm.useForm();
	const [ description, setDescription ] = useState('');
	const [ fileList, setFileList ] = useState([]);

	const onImgChange = ({ fileList: newFileList }: any) => {
		setFileList(newFileList);
	};

	const beforeUpload = (file: any) => {
		const isJpgOrPng = file['type'] === 'image/jpeg' || file['type'] === 'image/png';
		if (!isJpgOrPng) {
			message.error('You can only upload JPG or PNG file!');
		}
		const isLt2M = file['size'] / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!');
		}
		return isJpgOrPng && isLt2M;
	};

	const onPreview = async (file: any) => {
		let src = file.url;
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj);
				reader.onload = () => resolve(reader.result);
			});
		}
		const image = new Image();
		image.src = src;

		const imgWindow: any = window.open(src);
		imgWindow.document.write(image.outerHTML);
	};

	const onInputChange = (e: any) => {
		if (e.target.value.length > 0) return setDescription(e.target.value);
		setDescription('');
	};
	const onCancel = () => {
		setIsCancel(true);
		setAddPost(false);
	};

	const dummyRequest = (props: any) => {
		const { onSuccess } = props;
		setTimeout(() => {
			onSuccess('ok');
		}, 0);
	};
	const submitForm = (fileList: any, description: any) => {
		let fileObj = fileList[0]['thumbUrl'];
		onFinish && onFinish({ imgUrl: fileObj, description: description });
		// Clear form
		setFileList([]);
		setDescription('');
	};

	return (
		<div className="upload-post-form">
			{!isCancel && (
				<div onClick={() => onCancel()} className="oncancel-button">
					X
				</div>
			)}
			<AntdForm form={form} onFinishFailed={onFinishFailed || undefined}>
				<AntdForm.Item>
					<ImgCrop rotate>
						<Upload
							name="file"
							className="upload-image"
							customRequest={(options) => dummyRequest(options)}
							listType="picture-card"
							showUploadList={true}
							fileList={fileList}
							beforeUpload={beforeUpload}
							onChange={onImgChange}
							onPreview={onPreview}
						>
							{fileList.length === 0 && '+ Upload'}
						</Upload>
					</ImgCrop>
				</AntdForm.Item>
				<AntdForm.Item>
					<Input
						onChange={(e) => onInputChange(e)}
						placeholder={`Enter post description...`}
						value={description}
						style={{ fontSize: 12 }}
					/>
					<Button
						className="update-form-submit-button"
						buttonName={submitBtnName}
						htmlType={submitBtnType}
						onClick={() => submitForm(fileList, description)}
					/>
				</AntdForm.Item>
			</AntdForm>
		</div>
	);
};
