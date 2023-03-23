import IKImage from '../../src/components/IKImage.vue';

export default {
  title: 'IKImage',
};

const publicKey = process.env.VUE_APP_PUBLIC_KEY;

const urlEndpoint = process.env.VUE_APP_URL_ENDPOINT;

const path = "default-image.jpg";

const src = `${urlEndpoint}/${path}`;

let nestedImagePath = "/sample-folder/default-image.jpg";

export const imageWithSrc = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} src=${src}></IKImage>`,
});

export const imageWithPath = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} path=${path}></IKImage>`,
});

export const imageWithQueryParameters = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} path=${path} :queryParameters="{version:5, name: 'check'}"></IKImage>`,
});

export const imageWithSrcQueryParameters = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} src="${src}?foo=bar" :queryParameters="{version:5, name: 'check'}"></IKImage>`,
});

export const imageWithTrailingSlashesInUrlEndpoint = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint="https://ik.imagekit.io/your_imagekit_id////" path=${path}></IKImage>`,
});

export const imageWithLeadingSlashesInPath = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} path=${`////${path}`}></IKImage>`,
});

export const imageWithLQIPWithSrcWithNoTransformation = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} src=${src} :lqip="{active:'true',threshold:20}"></IKImage>`,
});

export const imageWithLQIPWithSrcWithTransformation = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} src=${src} :lqip="{active:'true',threshold:20}" :transformation="[{height:300,width:400}]"></IKImage>`,
});


export const imageWithLQIPWithPathWithNoTransformation = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} path=${path} :lqip="{active:'true',threshold:20}"></IKImage>`,
});

export const imageWithLQIPWithPathWithTransformation = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} path=${path} :lqip="{active:'true',threshold:20}" :transformation="[{height:300,width:400}]"></IKImage>`,
});

export const imageWithLQIPWithNestedPath = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint=${urlEndpoint} path=${nestedImagePath} :lqip="{active:'true',threshold:20}" :transformation="[{height:300,width:400}]"></IKImage>`,
});

export const imageWithNoPublicKey = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="" urlEndpoint=${urlEndpoint} src=${src}></IKImage>`,
});

export const imageWithNoUrlEndpoint = () => ({
  components: { IKImage },
  template: `<IKImage publicKey="${publicKey}" urlEndpoint="" src=${src}></IKImage>`,
});
